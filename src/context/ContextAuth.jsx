import { createContext } from 'react'
import { useState } from 'react';

const AuthContext = createContext({})
function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState(false);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext}
export default AuthContextProvider