import React from 'react';
import classnames from 'classname';

class PegZone extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const pegs = [];
        for (let [key, val] of this.props.colors) {
            let className = classnames('peg', val, this.props.current==key?'selected':'');
            console.log(className);
            pegs.push(
                <div key={key} className={className} onClick={this.props.selectPeg} />
            );
        }
        return (
            <div className="peg-zone">
                {pegs}
            </div>
        );
    }
}

export default PegZone;