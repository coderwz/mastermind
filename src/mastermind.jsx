/**
 * Created by wzhu on 8/14/16.
 */
import React from 'react';
import Rule from './rule.jsx';
import DecodeZone from './decode_zone.jsx';
import PegZone from './pegzone.jsx';


class MasterMind extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: new Map([
                [1, 'one'],
                [2, 'two'],
                [3, 'three'],
                [4, 'four'],
                [5, 'five'],
                [6, 'six'],
            ]),
            ruleState: false,
            curColor: 1,
            curRow: 0,
        };

        this.toggleRule = this.toggleRule.bind(this);
        this.selectPeg = this.selectPeg.bind(this);
    }

    toggleRule() {
        this.setState({ruleState: !this.state.ruleState});
    }

    selectPeg(e) {
        console.log('AAA');
        this.setState({curColor: e.target.getAttribute('data-idx')});
    }

    render() {
        return (
            <div className="mastermind">
                <h1>
                    <span className="M">M</span>
                    <span className="A">A</span>
                    <span className="S">S</span>
                    <span className="T">T</span>
                    <span className="E">E</span>
                    <span className="R">R</span>
                    <span className="mind">MIND</span>
                </h1>

                <Rule state={this.state.ruleState} toggleRule={this.toggleRule}/>
                <DecodeZone />
                <PegZone current={this.state.curColor} colors={this.state.colors} selectPeg={this.selectPeg}/>
                <footer>
                    You can read about how this game was done here:
                    <a href="http://zofiakorcz.pl/mastermind-react-es6-webpack">
                        Mastermind game in React and ECMAScript 6.</a>
                    <p>&copy;<a href="http://zofiakorcz.pl/">Zofia Korcz</a></p>
                </footer>
            </div>
        );
    }
}

export default MasterMind;
