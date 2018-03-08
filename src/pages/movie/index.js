import React, {Component} from 'react';
import './index.less';

export default class Movie extends Component {
    constructor(props) {
        super(props);
        console.log("home");
    }

    render() {
        return (
            <div className="content">
                <div>moviePage</div>
            </div>
        )
    }
}