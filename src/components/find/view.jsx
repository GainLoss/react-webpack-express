import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import FindMenu from './menu.jsx';
import '../style/home.css';
import fetch from 'isomorphic-fetch';


class Find extends React.Component {
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
                <FindMenu urlLocation={this.state.query} />
                
            </div>
        )
    }
}
export default Find


