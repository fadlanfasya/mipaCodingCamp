import { useEffect } from 'react'
import '../style/Chatbot.css'

export default function KommunicateChat() {
    // useEffect(() => {
    //     (function(d, m){
    //         var kommunicateSettings = {"appId":"33ae5a6b8a7589e1916a5f02f0196fad5","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //         var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //         s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //         var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //         window.kommunicate = m; m._globals = kommunicateSettings;
    //       })(document, window.kommunicate || {});
    // }, []);
    return (
    <div>
        {/* <script src="https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js"></script>
        <df-messenger
        agent-id="8f051fb4-6e03-4241-b917-f2e7be2b0ce2"
        language-code="id">
            <df-messenger-chat-bubble
            chat-title="Botcamp"
            bot-writing-text="..."
            placeholder-text="PLACEHOLDER_TEXT">
            </df-messenger-chat-bubble>
        </df-messenger> */}
    </div>
    )
}
