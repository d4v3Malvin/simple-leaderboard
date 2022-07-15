

const LeaderboardDetail = ({leaderboard, index}) => {

    // console.log(leaderboard)
    return (
        <tr className="text-center">
            <th scope="row">{index+1}</th>
            <td>{leaderboard.name}</td>
            <td>{leaderboard.challenge}</td>
            <td>{leaderboard.clever}</td>
        </tr>
    )
}

export default LeaderboardDetail