import { useEffect, useState } from 'react'
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const showNotification = (message, theme = 'dark') => {
    Toastify({
        text: message,
        duration: 2000,
        gravity: 'top',
        position: 'right',
        style: {
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
        },
    }).showToast();
}

const useChatRoom = ({ serverUrl, roomId }) => {
    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        }
        const conn = createConnection(options)
        conn.on('message', msg => {
            showNotification('New Message: ' + msg)
        })
        conn.connect()

        return () => conn.disconnect()
    }, [roomId, serverUrl])
}

const createConnection = ({ serverUrl, roomId }) => {
    if (typeof serverUrl !== 'string') {
        throw Error('Expected serverUrl to be a string. Received: ' + serverUrl);
    }

    if (typeof roomId !== 'string') {
        throw Error('Expected roomId to be a string. Received: ' + roomId);
    }

    let eventCallback
    let intervalId

    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
            clearInterval(intervalId)

            intervalId = setInterval(() => {
                if (eventCallback) {
                    const msg = Math.random() > 0.5 ? 'Hey' : 'Hello'
                    eventCallback(msg)
                }
            }, 3000)
        },
        on(event, callback) {
            if (eventCallback) {
                throw new Error('Cannot add the handler twice.')
            }

            if (event !== 'message') {
                throw new Error('Only "message" event is supported.')
            }

            eventCallback = callback
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl + '');
            clearInterval(intervalId)
            eventCallback = null
        }
    }
}

const ChatRoom = ({ roomId }) => {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234')

    useChatRoom({
        serverUrl: serverUrl,
        roomId: roomId
    })

    return (
        <>
            <label className="flex flex-col">
                Server URL:
                <input
                    type="text"
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
            </label>
            <h3 className="text-xl">Welcome to the <i>{roomId}</i> room!</h3>
        </>
    )
}

const PassReactiveValuesBetweenHooks = () => {
    const [room, setRoom] = useState('general')

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Pass Reactive Values between Hooks
            </h2>
            <label>
                Choose the chat room:
                <select value={room}
                    onChange={e => setRoom(e.target.value)}
                    className="select select-bordered select-sm w-full max-w-xs ml-2">
                    <option>general</option>
                    <option>travel</option>
                    <option>music</option>
                </select>
            </label>
            <hr /> <br />
            <ChatRoom roomId={room} />
        </>
    )
}

export default PassReactiveValuesBetweenHooks