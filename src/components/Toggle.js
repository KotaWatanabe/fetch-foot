import React from 'react'

export default function Toggle(props) {
    return (
        <button onClick={props.leagueToggle} data-leagueid={props.leagueId}>
            {props.text}
        </button>
    )
}
