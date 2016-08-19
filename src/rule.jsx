import React from 'react';

class Rule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var className = this.props.state?'show':'',
            hint = this.props.state?'Hide rules':'Show rules';
        return (
            <div className="rule">
                <h3 onClick={this.props.toggleRule}>{hint}</h3>
                <div className={className}>Try to guess the pattern, in both order and color, within ten turns.
                    After submitting a row, a small black peg is placed for each code peg
                    from the guess which is correct in both color and position. A white peg
                    indicates the existence of a correct color code peg placed in the wrong position.
                    More info on <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)" target="_blank"> Wikipedia</a>.</div>
            </div>
        );
    }
}

export default Rule;