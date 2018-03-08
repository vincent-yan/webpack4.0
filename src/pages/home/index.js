import React, {Component} from 'react';
import './index.less';
import getImages from '../../facade/home'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {data: {}}
    }

    async componentDidMount() {
        const images = await getImages();
        console.log(JSON.stringify(images));
        this.setData({images: images});
    }

    async onChange() {
        const images = await getImages();
        console.long(JSON.stringify(images));
    }

    render() {
        return (
            <div className="content" onClick={()=> {
                this.onChange()
            }}>
                <div>homePage</div>
            </div>
        )
    }
}