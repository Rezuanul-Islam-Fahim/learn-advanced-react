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
                <Link to={'/syncrognize-effects'}
                    className="btn btn-primary my-2">
                    Syncrognizing with Effects
                </Link>
                <Link to={'/custom-hooks-example'}
                    className="btn btn-primary my-2">
                    Custom Hooks Example
                </Link>
                <Link to={'/custom-hooks-extract-repetation'}
                    className="btn btn-primary my-2">
                    Extract repetation with Custom Hooks
                </Link>
                <Link to={'/pass-reactive-values-hooks'}
                    className="btn btn-primary my-2">
                    Pass Reactive Values between Hooks
                </Link>
            </div>
        </div>
    )
}

export default HomePage