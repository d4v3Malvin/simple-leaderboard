import { createContext, useReducer } from "react"

export const LeaderboardContext = createContext()

export const leaderboardReducer = (state, action) => {
    switch (action.type) {
        case "GET_LEADERBOARD":
            return {
                leaderboards: action.payload
            }
    
        case "POST_LEADERBOARD": 
            return {
                leaderboards: [action.payload, ...state.leaderboards].sort((a,b) => {
                    return b.challenge === a.challenge ? b.clever - a.clever : b.challenge - a.challenge 
                })
            }
        default:
            return state
    }
}

export const LeaderboardContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(leaderboardReducer, {
        leaderboards: null
    })

    return (
        <LeaderboardContext.Provider value={{...state, dispatch}}>
            {children}
        </LeaderboardContext.Provider>
    )
}