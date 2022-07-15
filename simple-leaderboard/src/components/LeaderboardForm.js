import { useState } from "react"
import { useLeaderboardContext } from "../hooks/useLeaderboardContext"



const LeaderboardForm = () => {

    const { dispatch } = useLeaderboardContext()

    const [name, setName] = useState('')
    const [challenge, setChallenge] = useState('')
    const [clever, setClever] = useState('')

    const postLeaderboard = async (e) => {
        e.preventDefault()

        const leaderboard = {name, challenge, clever}

        const response = await fetch("http://localhost:4000/api/v1/leaderboard", {
            method: 'POST',
            body: JSON.stringify(leaderboard),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        console.log(json)

        if (response.ok){
            setName('')
            setChallenge('')
            setClever('')
            dispatch({type: "POST_LEADERBOARD", payload: json})
        }
    }

    return (
        <div className="card m-2">
            <div className="card-header bg-primary">
                <h3>Leaderboard</h3>
            </div>
            <div className="card-body">
                <form onSubmit={postLeaderboard}>
                    <div className="form-floating mb-2">
                        <input 
                        type="text" 
                        className="form-control" 
                        onChange={(e) => setName(e.target.value)} id="floatingName" 
                        value={name} 
                        placeholder="Name"/>
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="number" className="form-control" onChange={(e) => setChallenge(e.target.value)} id="floatingChallenge" value={challenge} placeholder="Challenge"/>
                        <label htmlFor="floatingChallenge">Challenge</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="number" className="form-control" onChange={(e) => setClever(e.target.value)} id="floatingClever" value={clever} placeholder="Clever"/>
                        <label htmlFor="floatingClever">Clever</label>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default LeaderboardForm