import  React, {Component} from 'react'
import  Nav from './components/Nav'

export default  class Master extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav/>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}
