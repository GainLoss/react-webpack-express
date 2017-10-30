import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import HomeMenu from './menu.jsx';
import HomeEvery from './every.jsx';
import '../style/home.css'
import fetch from 'isomorphic-fetch';
// require('es6-promise').polyfill();
// require('isomorphic-fetch');


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={url:this.props.location.pathname}
    }
    componentDidMount(){
        fetch("/list/show", function(error, meta, body){
            console.log(body.toString());
        });
    }
    render(){
        return (
           <div className="homeCon">
            <Nav urlLocation={this.state.url}/>
            <HomeMenu/>
           </div>
        )
    }
}
export default Home


