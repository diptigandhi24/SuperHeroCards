import React, { Component } from 'react';
import '../../common.css';
import DisplayFightersScore from "./DisplayFightersScore"


class FightingRing extends Component {
    powerStats = ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];
    state = {
        fightCategory: "",
        winner: "",
        displayFighters: false
    }
    fightClicked = (fightCategory) => {
        
        let playerA = this.props.characterA.powerstats[fightCategory.toLowerCase()];
        let playerB = this.props.characterB.powerstats[fightCategory.toLowerCase()];
        this.setState({
            fightCategory,
            winner: playerA > playerB ? "PlayerA" : "PlayerB",
            displayFighters: true
        })
        
    }
    render() {
        return <div className="ringInfo">
            <div className="fightButtons">
                {this.powerStats.map(stat => <button onClick={() => {
                    this.fightClicked(stat);
                }} disabled={!(this.props.characterA && this.props.characterB)}>
                    {stat}
                </button>)}
            </div>
            {
                (this.state.displayFighters)
                && <div className="powerstat">
                    <DisplayFightersScore fighterInfo={this.props.characterA} selectedFightCategory={this.state.fightCategory} />
                    <DisplayFightersScore fighterInfo={this.props.characterB} selectedFightCategory={this.state.fightCategory} />
                    <section className="winner"><span>{this.state.winner}</span> Wins!!!</section>
                </div>
            }
        </div >

    }
}

export default FightingRing;