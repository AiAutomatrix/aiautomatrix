export default function CustomerServiceWebchat() {
    const embedCode = `
      <script src="https://cdn.botpress.cloud/webchat/v3.2/inject.js"></script>
      <script src="https://files.bpcontent.cloud/2025/08/26/22/20250826221413-HL4C5ZIZ.js" defer></script>
    `;

    return (
        <div 
            className="w-full h-[600px] md:h-[700px]"
            dangerouslySetInnerHTML={{ __html: embedCode }} 
        />
    );
}