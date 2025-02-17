import React from 'react';
import Bundesliga from '../img/Bundesliga.png';
import Eredivisie from '../img/Eredivisie.png';
import LaLiga from '../img/LaLiga.png';
import Ligue1 from '../img/Ligue1.png';
import PremierLeague from '../img/PremierLeague.png';
import SerieA from '../img/SerieA.png';
import LastMatch from './LastMatch';

export default function LeagueInfo(props) {
    let imgSrc;
    switch (props.leagueName) {

        case "Bundesliga":
            imgSrc = Bundesliga;
            break;

        case "Eredivisie":
            imgSrc = Eredivisie;
            break;

        case "Primera Division":
            imgSrc = LaLiga;
            break;

        case "Ligue 1":
            imgSrc = Ligue1;
            break;

        case "Premier League":
            imgSrc = PremierLeague;
            break;

        case "Serie A":
            imgSrc = SerieA;
            break;

        default:
            imgSrc = LaLiga;
            break;
    }
    return (
        <div className="league-info">
            <img src={imgSrc} alt="league" />
            <LastMatch awayTeam={props.awayTeam} homeTeam={props.homeTeam} score={props.score}/>
        </div>
    )
}
