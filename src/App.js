import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Row from './components/Row';
import TableFrame from './components/TableFrame';

class App extends Component {

  state = {
    leagueName:'La Liga',
    leagueId: 'PD',
    leagueNames: {
      "La Liga": 'PD',
      "Premier League": 'PL',
      "Eredivisie": 'DED',
      "Ligue 1": 'FL1',
      "Bundesliga": 'BL1',
      "Serie A": 'SA'
    },
    teams:[],
    leagueToggle:[]
  }

  fetchData() {
    const Token = "e21e1a03eec449d1871d75d5e042ec4f";
    const teams = [];
    axios.get(`https://api.football-data.org/v2/competitions/PL/standings`, { headers: { 'X-Auth-Token': Token }})
    .then(res => { 
      res.data.standings[0].table.map((data, index) => {
        const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = data;
        const { name, crestUrl } = data.team;
        return (
          teams.push(
            <Row key={index} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
          )
        )
      })
    this.setState({
      leagueName: res.data.competition.name,
      teams
    })
    })
    .catch(error => {
      console.log(error)
    });
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <TableFrame>
          {this.state.teams}
        </TableFrame>
      </div>
    );
  }
}

export default App;
