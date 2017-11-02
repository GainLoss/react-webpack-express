import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import ZlMenu from './menu.jsx';
import '../style/home.css';
import fetch from 'isomorphic-fetch';


class Zl extends React.Component {
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
                <ZlMenu urlLocation={this.state.query} />
                
            </div>
        )
    }
}
export default Zl


