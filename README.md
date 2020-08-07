#WebSockets

#Constants 

    Websockets have three constants that return back its value (ready state);

    WebSocket.CONNECTING	 0
    WebSocket.OPEN	         1
    WebSocket.CLOSING	     2
    WebSocket.CLOSED         3

You can check the current state of the websocket calling the property 
obj.readystate which would return back one of these values

#All websocket properties

    WebSocket.binaryType : The binary data type used by the connection.

    WebSocket.bufferedAmount (Read only property) 
    The number of bytes of queued data.

    WebSocket.extensions (Read only property)
    The extensions selected by the server.

    WebSocket.onclose
    An event listener to be called when the connection is closed.

    WebSocket.onerror
    An event listener to be called when an error occurs.

    WebSocket.onmessage
    An event listener to be called when a message is received from the server.

    WebSocket.onopen
    An event listener to be called when the connection is opened.

    WebSocket.protocol (Read only property)
    The sub-protocol selected by the server.

    WebSocket.readyState (Read only property)
    The current state of the connection.

    WebSocket.url (Read only property)
    The absolute URL of the WebSocket.

#All websocket methods

    WebSocket.close([code[, reason]])
    Closes the connection.

    WebSocket.send(data)
    Enqueues data to be transmitted.

All websocket event listeners + events; 

    WebSocket.onclose
    An event listener to be called when the connection is closed.

    WebSocket.onerror
    An event listener to be called when an error occurs.

    WebSocket.onmessage
    An event listener to be called when a message is received from the server.

    WebSocket.onopen
    An event listener to be called when the connection is opened.
