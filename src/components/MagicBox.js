import React, {Component} from 'react';
import './MagicBox.css';

class MagicBox extends Component {

    render() {

        return (

            <div className="magicbox aqua">
                { this.props.text }
            </div>
            
        );

    }
}

export default MagicBox;
