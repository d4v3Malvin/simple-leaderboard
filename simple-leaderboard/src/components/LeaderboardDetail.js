

const LeaderboardDetail = ({leaderboard, index}) => {

    console.log(leaderboard)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{leaderboard.name}</td>
            <td>{leaderboard.challenge}</td>
            <td>{leaderboard.clever}</td>
        </tr>
    )
}

export default LeaderboardDetail