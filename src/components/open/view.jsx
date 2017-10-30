import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import OpenMenu from './menu.jsx';
import OpenEvery from './every.jsx';
import '../style/home.css'


class Open extends React.Component{
    constructor(props){
        super(props);
        this.state={url:this.props.location.pathname}
    }
    componentDidMount(){
        console.log(1)
        console.log(this.props)
    }
    render(){
        return (
           <div className="homeCon">
            <Nav urlLocation={this.state.url}/>
            <OpenMenu/>
           </div>
        )
    }
}
export default Open


