import { useState } from 'react'

const useFormInput = () => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    return {
        value: text,
        onChange: handleChange
    }
}

const ExtractRepetationWithHooks = () => {
    const firstnameInput = useFormInput()
    const lastnameInput = useFormInput()

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Extract Repetation with Custom Hooks
            </h2>
            <div className="flex flex-col">
                <input
                    type="text"
                    {...firstnameInput}
                    placeholder="First Name"
                    className="input input-bordered w-full max-w-xs my-2" />
                <input
                    type="text"
                    {...lastnameInput}
                    placeholder="Last Name"
                    className="input input-bordered w-full max-w-xs my-2" />
                <h2 className="text-xl">
                    Your name is: {firstnameInput.value} {lastnameInput.value}
                </h2>
            </div>
        </>
    )
}

export default ExtractRepetationWithHooks