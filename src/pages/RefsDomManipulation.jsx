import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'

const RefsDomManipulation = () => {
    const taskRef = useRef(null)
    const [tasks, setTasks] = useState(initialTasks)
    const [text, setText] = useState('')
    const ref = useRef(null)

    const handleClick = () => {
        ref.current.focus()
    }

    const addTask = () => {
        const newTask = { id: tasks.length, text: text }
        flushSync(() => {
            setText('')
            setTasks([...tasks, newTask])
        })
        taskRef.current.lastChild.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        })
    }

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Refs for DOM Manipulation
            </h2>
            <div className="flex flex-row">
                <input
                    type="text"
                    ref={ref}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
                <button onClick={handleClick} className="btn btn-neutral ml-3">
                    Click to Focus
                </button>
            </div>
            <div className="flex flex-row">
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs" />
                <button onClick={addTask} className="btn btn-neutral ml-3">
                    Add
                </button>
            </div>
            <ul ref={taskRef}>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

let initialTasks = []
for (let i = 0; i < 25; i++) {
    initialTasks.push({
        id: initialTasks.length,
        text: `Todo #${i + 1}`
    })
}

export default RefsDomManipulation