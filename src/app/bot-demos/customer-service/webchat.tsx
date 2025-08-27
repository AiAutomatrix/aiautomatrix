
"use client";

import React, { useEffect } from 'react';

export default function CustomerServiceWebchat() {
  useEffect(() => {
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    const configScript = document.createElement('script');
    configScript.src = "https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js";
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      // Cleanup the scripts when the component unmounts
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    }
  }, []);

  return (
    <div className="w-full h-[600px] md:h-[700px] flex items-center justify-center">
      {/* The webchat will be injected into the page by the scripts */}
    </div>
  );
}
