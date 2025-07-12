import { Link } from 'react-router'

const HomePage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col">
                <Link to={'/reference-with-refs'}
                    className="btn btn-primary my-2">
                    Referencing Values with Refs
                </Link>
                <Link to={'/refs-dom'}
                    className="btn btn-primary my-2">
                    Refs for DOM manipulation
                </Link>
            </div>
        </div>
    )
}

export default HomePage