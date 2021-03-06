import { useEffect } from "react"
import { useLeaderboardContext } from "../hooks/useLeaderboardContext"
import LeaderboardDetail from "../components/LeaderboardDetail"


const Home = () => {

    const { leaderboards, dispatch } = useLeaderboardContext()

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const response = await fetch('http://localhost:4000/api/v1/leaderboard')
            const json = await response.json()

            if (response.ok){
                dispatch({type: "GET_LEADERBOARD", payload: json})
            }
        }


        fetchLeaderboard()
    }, [dispatch])

    return (
        <div className="homepages container-fluid">
            <div className="row" style={{paddingTop:"1.5em", paddingBottom: "1.5em"}}>
                <div className="col">
                    <h4>Leaderboard</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-borderless table-hover">
                        <thead className="text-center">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Challenge</th>
                                <th scope="col">Clever</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboards && leaderboards.map( (leaderboard, index) => (
                                <LeaderboardDetail key={leaderboard._id} leaderboard={leaderboard} index={index}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Home