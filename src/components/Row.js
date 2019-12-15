import React from 'react'

{/* <Row key={index} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} /> */}

export default function Row(props) {
    return (
        <tr>
            <td>{props.position}</td>
            <td style={style.teamName}>
                <div >
                    <img style={style.image} src={props.crestURI} alt="emblem"/>
                </div>
                {props.teamName}
            </td>
            <td>{props.playedGames}</td>
            <td>{props.wins}</td>
            <td>{props.draws}</td>
            <td>{props.losses}</td>
            <td>{props.goalsFor}</td>
            <td>{props.goalsAgainst}</td>
            <td>{props.goalDifference}</td>
            <td>{props.points}</td>
        </tr>
    )
}

const style = {
    teamName : {
        width: '250px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center'
    },
    image: {
        width: '30px',
        height: '30px',
        marginRight: '10px',
        display: 'flex',
        justifyContent: 'center'
    }
}
