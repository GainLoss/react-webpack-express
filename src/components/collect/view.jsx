import React from 'react';
import ReactDOM from 'react-dom';
//组件
import '../style/home.css';
import fetch from 'isomorphic-fetch';
import Nav from '../nav.jsx';
import CollectMenu from './menu.jsx';


class Collect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: this.props.location.pathname,
            query: this.props.location,
        }
    }
    componentWillMount() {
    }
    render() {
        return (
            <div className="homeCon">
                <Nav urlLocation={this.state.url} />
                <CollectMenu urlLocation={this.state.query} />
                
            </div>
        )
    }
}
export default Collect


