import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Row from './components/Row';
import TableFrame from './components/TableFrame';
import Toggle from './components/Toggle'
import Header from './components/Header'
import LeagueInfo from './components/LeagueInfo'
import LastMatch from './components/LastMatch'

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
    leagueToggle:[],
    awayTeam:undefined,
    homeTeam:undefined,
    score: undefined,
  }

  showLatest = (e) => {
    const Token = "e21e1a03eec449d1871d75d5e042ec4f";
    const teamId = e.target.getAttribute('data-teamid')
    // const latestMatchday = this.state.currentMatchday
    axios.get(`https://api.football-data.org/v2/teams/${teamId}/matches?status=FINISHED`, { headers: { 'X-Auth-Token': Token }})
    .then(res => {
      const lastMatchday= res.data.matches.length-1
      const lastMatch = res.data.matches[lastMatchday]
      console.log(lastMatch)
      const { awayTeam, homeTeam, score } = lastMatch
      this.setState({ awayTeam, homeTeam, score })
    })
  }
  

  leagueToggle = (e) => {
    const leagueId = e.target.getAttribute('data-leagueid');
    this.setState({
      leagueId
    }, () => { this.fetchData() });
  }

  fetchData() {
    const Token = "e21e1a03eec449d1871d75d5e042ec4f";
    let leagueId = this.state.leagueId
    axios.get(`https://api.football-data.org/v2/competitions/${leagueId}/standings`, { headers: { 'X-Auth-Token': Token }})
    .then(res => {
      this.setState({currentMatchday: res.data.season.currentMatchday})
      const teams = [];
      res.data.standings[0].table.map((data, index) => {
        const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = data;
        const id = data.team.id
        const { name, crestUrl } = data.team;
        return (
          teams.push(
            <Row key={index} showLatest={this.showLatest} teamId ={id} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
          )
        )
      })
    this.setState({
      leagueName: res.data.competition.name,
      teams,
      awayTeam:undefined
    })
    })
    .catch(error => {
      console.log(error)
    });
  }

  componentDidMount() {
    this.fetchData();
    for (let key in this.state.leagueNames) {
      this.state.leagueToggle.push(
        <Toggle leagueToggle={this.leagueToggle} key={this.state.leagueNames[key]} leagueId={this.state.leagueNames[key]} text={key} />
      )
    }
  }

  render() {
    return (
      <div className="App">
        <Header>
          {this.state.leagueToggle}
        </Header>
        <div className="container">
          <LeagueInfo leagueName={this.state.leagueName} awayTeam={this.state.awayTeam} homeTeam={this.state.homeTeam} score={this.state.score}/>
          <TableFrame>
            {this.state.teams}
          </TableFrame>
        </div>
      </div>
    );
  }
}

export default App;
