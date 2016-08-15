/**
 * Created by wzhu on 8/14/16.
 */
import React from 'react';


class MasterMind extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rule: false,
        };

        this.toggleRule = this.toggleRule.bind(this);
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

                <Rule state={this.state.rule} toggleRule={this.toggleRule}/>
                <DecodeZone />
                <PegZone />
                <footer>
                    You can read about how this game was done here:
                    <a href="http://zofiakorcz.pl/mastermind-react-es6-webpack">
                        Mastermind game in React and ECMAScript 6.</a>
                    <p>&copy;<a href="http://zofiakorcz.pl/">Zofia Korcz</a></p>
                </footer>
            </div>
        );
    }

    toggleRule() {
        this.setState({});
    }
}

export default MasterMind;

class Rule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="rule">
                <h3>Show rules</h3>

            </div>
        );
    }
}

class DecodeZone extends React.Component {
    render() {
        return (
            <div className="decode-zone">Decode Zone</div>
        );
    }
}

class PegZone extends React.Component {
    render() {
        return (
            <div className="peg-zone">Peg Zone</div>
        );
    }
}