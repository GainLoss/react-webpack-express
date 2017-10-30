import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import CollectMenu from './menu.jsx';
import CollectEvery from './every.jsx';
import '../style/home.css'


class Collect extends React.Component{
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
            <CollectMenu/>
           </div>
        )
    }
}
export default Collect


