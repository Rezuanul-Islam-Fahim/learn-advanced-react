import { useState, useEffect } from 'react'

const PlayGround = () => {
    const [text, setText] = useState('demo')

    useEffect(() => {
        const onTimeout = () => {
            console.log('⏰ ' + text)
        }

        console.log('🔵 Schedule "' + text + '" log')
        const timeoutId = setTimeout(onTimeout, 2000)
        
        return () => {
            console.log('🟡 Cancel "' + text + '" log')
            clearTimeout(timeoutId)
        }
    }, [text])

    return (
        <div className="flex flex-col">
            <br />
            <br />
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs" />
            {text.length > 0 && (
                <>
                    <br />
                    <p>{text}</p>
                </>
            )}
        </div>
    )
}

const SyncrognizingWithEffects = () => {
    const [show, setShow] = useState(false)

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Syncrognizing with Effects
            </h2>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                {!show ? 'Mount Component' : 'Unmount Component'}
            </button>
            {show && <PlayGround />}
        </>
    )
}

export default SyncrognizingWithEffects