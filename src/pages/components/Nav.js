import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export  default class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='nav'>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/movie">About</Link></li>
                </ul>
            </div>
        )
    }
}