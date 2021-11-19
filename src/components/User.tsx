import { useState } from 'react';


interface User {
    uid: string | number,
    name: string
}

export const User = () => {
    const [user, setUser] = useState<User>();

    const login = () => {
        setUser({
            uid: 1,
            name: "John Doe"
        })
    }

    return (
        <div className="mt-5">
            <h3>Usuario: UseState</h3>
            <button className="btn btn-outline-primary" onClick={login}>Login</button>

            <pre> {(!user) ? 'There is no user' : JSON.stringify(user)} </pre>
        </div>
    )
}
