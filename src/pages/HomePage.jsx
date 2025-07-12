import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="flex flex-col">
                <Link to={'/reference-with-refs'}
                    className="btn btn-primary my-2">
                    Referencing Values with Refs
                </Link>
            </div>
        </div>
    )
}

export default HomePage