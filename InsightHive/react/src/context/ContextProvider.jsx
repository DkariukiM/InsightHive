import { createContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    
})

export const ContextProvider = ({children}) => {

    const[currentUser, setCurrentUser] = useState({})
    const[userToken, setUserToken] = useState(null)

    return(
        <StateContext.Provider 
        value = {{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const userStateContext = () => useContext(StateContext)
