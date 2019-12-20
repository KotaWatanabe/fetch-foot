import React from 'react'

export default function TableFrame(props) {
    console.log(props)
    return (
        <>
        {props.awayTeam === undefined ?
             <p className="stats">Click the team name to see the result of latest game</p> :

        <table className="stats">
          <tbody>
            <tr className="stats-head">
                <td className="stats-home">
                    Home
                </td>
                <td className="stats-away">
                    Away
                </td>
            </tr>
            <tr className="stats-body">
                <td className="stats-home">
                <p>{props.homeTeam.name}</p>
                </td>
                <td className="stats-away">
                <p>{props.awayTeam.name}</p>
                </td>
            </tr>
            <tr className="stats-body">
                <td className="stats-home">
                <span>{props.score.fullTime.homeTeam}</span>
                </td>
                <td className="stats-away">
                <span>{props.score.fullTime.awayTeam}</span>
                </td>
            </tr>
          </tbody>
         </table>
        }
        </>
        )
}
