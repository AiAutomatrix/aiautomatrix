# How to Reliably Auto-Open the Botpress Webchat

This document explains the recommended script for embedding a Botpress webchat in an `iframe` and ensuring it opens automatically and reliably when the page loads.

---

## The Problem: Race Conditions

When you embed a Botpress webchat, two main scripts are involved:

1.  **`inject.js`**: The core Botpress script that creates the `window.botpress` object and its associated methods (`on`, `open`, etc.).
2.  **Your Custom Script**: The script you write to call `window.botpress.open()`.

A "race condition" can occur if your custom script tries to run *before* `inject.js` has finished loading and initializing the `window.botpress` object. In a live production environment (like Vercel), network latency and browser rendering can make this more likely than in a fast local development environment.

If your script executes first, `window.botpress` will be `undefined`, causing an error and preventing the chat from opening.

---

## The Solution: A Resilient Polling Script

Instead of relying on a simple `load` event, a more robust solution is to actively check for the existence of the `window.botpress` object before trying to use it. This is achieved with a simple "polling" function.

### The Code

Here is the full HTML and JavaScript for the `iframe`:

```html
<html>
  <head>
    <!-- 1. Include the main Botpress script -->
    <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"><\/script>

    <!-- Basic styling to make the iframe fill its container -->
    <style>
      html, body, #webchat, #webchat .bpWebchat {
        position: unset !important;
        width: 100% !important;
        height: 100% !important;
        max-height: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
      }
      /* Hide the default launcher bubble since we're auto-opening */
      #webchat .bp-widget-widget {
          display: none !important;
      }
    </style>
  </head>
  <body>
    <!-- 2. Include your specific bot's configuration script -->
    <script src="https://files.bpcontent.cloud/YOUR_BOT_CONFIG_URL.js" defer><\/script>

    <!-- 3. The resilient auto-open script -->
    <script>
      /**
       * This function continuously checks if the Botpress object is available.
       * Once it's ready, it sets up the event listener to open the chat.
       */
      const initBotpress = () => {
        // Check if the window.botpress object has been created by inject.js
        if (window.botpress) {
          // If it exists, we can safely add our 'ready' event listener.
          window.botpress.on("webchat:ready", () => {
            // This event fires when the webchat UI is fully initialized.
            // Now it's safe to open the chat window.
            window.botpress.open();
          });
        } else {
          // If window.botpress is not ready yet, wait a short moment (200ms)
          // and then try again. This recursive call creates a polling loop.
          setTimeout(initBotpress, 200);
        }
      };

      // Start the initialization check.
      initBotpress();
    <\/script>
  </body>
</html>
```

### Why This Works

1.  **No More Race Condition**: The `initBotpress` function doesn't assume `window.botpress` exists immediately. It checks first.
2.  **Polling with `setTimeout`**: If `window.botpress` isn't found, the script doesn't fail. It simply waits 200 milliseconds and then calls itself to check again. This repeats until the Botpress script has loaded and initialized.
3.  **Safe Event Handling**: Only after confirming `window.botpress` is available does it attempt to attach the `on("webchat:ready", ...)` event listener. This ensures that your code to open the chat runs at the correct time, every time, regardless of network speed or script load order.
