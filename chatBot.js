var webSocky = new WebSocket('ws://echo.websocket.org')
$(document).ready(function () {
    $("#connectBtn").click(function () {
        console.log("connecting")
        webSocky.OPEN
        if (webSocky.readyState === 1) {
            alert("connected!")
        }
    })
    $("#disconnectBtn").click(function () {
        console.log("closing...")
        webSocky.CLOSED
        if (webSocky.readyState === 3) {
            alert("disconnected")
        }
    })
    $("#sendBtn").click(function () {
        if (webSocky.readyState === 1) {
            alert("connected")
        }
    })
});


// if (webSocket && webSocket.readyState === 1) {
//     console.log("onSendClick(): sending message ", messageInput.value);

//     webSocket.send(messageInput.value);
//     appendToConsole(messageInput.value, "sent");
//   }