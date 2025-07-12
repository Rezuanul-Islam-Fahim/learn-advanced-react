import { useRef, useState } from 'react'

const ReferenceWithRefs = () => {
    const ref = useRef(0)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const timerRef = useRef(null)

    const showAlert = () => {
        ref.current = ref.current + 1
        alert('You clicked ' + ref.current + ' times')
    }

    const startTimer = () => {
        setStartTime(Date.now())
        setEndTime(Date.now())

        timerRef.current = setInterval(() => setEndTime(Date.now()), 50)
    }

    const stopTimer = () => {
        clearInterval(timerRef.current)
    }

    let elapsedTime = 0;
    if (startTime && endTime) {
        elapsedTime = (endTime - startTime) / 1000
    }

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Referencing values with Refs
            </h2>
            <button className="btn btn-primary w-40" onClick={() => showAlert()}>
                Click Here
            </button>
            <br />
            <p>Time Passed: {elapsedTime.toFixed(3)}</p>
            <div className="flex flex-row">
                <button className="btn btn-primary" onClick={startTimer}>
                    Start Timer
                </button>
                <button className="btn btn-error ml-3" onClick={stopTimer}>
                    End Timer
                </button>
            </div>
        </>
    )
}

export default ReferenceWithRefs