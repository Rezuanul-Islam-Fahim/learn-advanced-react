import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {
        const handleOnlineStatus = () => {
            setIsOnline(true)
        }

        const handleOfflineStatus = () => {
            setIsOnline(false)
        }

        window.addEventListener('online', handleOnlineStatus)
        window.addEventListener('offline', handleOfflineStatus)

        return () => {
            window.removeEventListener('online', handleOnlineStatus)
            window.removeEventListener('offline', handleOfflineStatus)
        }
    }, [])

    return isOnline
}

const SaveButton = () => {
    const isOnline = useOnlineStatus()

    const saveProgress = () => {
        console.log('Progress saved')
    }

    return (
        <button onClick={saveProgress}
            className="btn btn-primary" disabled={!isOnline}>
            {isOnline ? 'Save Progress' : 'Reconnecting...'}
        </button>
    )
}

const StatusBar = () => {
    const isOnline = useOnlineStatus()

    return (
        <h2 className="text-xl">
            {isOnline ? '✅ Online' : '❌ Disconnected'}
        </h2>
    )
}

const CustomHooks = () => {
    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Custom Hooks
            </h2>
            <div className="flex flex-col">
                <SaveButton /> <br />
                <StatusBar />
            </div>
        </>
    )
}

export default CustomHooks