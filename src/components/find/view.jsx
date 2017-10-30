import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import FindMenu from './menu.jsx';
import FindEvery from './every.jsx';
import '../style/home.css'


class Find extends React.Component{
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
            <FindMenu/>
           </div>
        )
    }
}
export default Find


