import React, { useRef } from 'react'

const ReferenceWithRefs = () => {
    let ref = useRef(0)

    const showAlert = () => {
        ref.current = ref.current + 1
        alert('You clicked ' + ref.current + ' times')
    }

    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Referencing values with Refs
            </h2>
            <button className='btn btn-primary w-40' onClick={() => showAlert()}>
                Click Here
            </button>
        </>
    )
}

export default ReferenceWithRefs