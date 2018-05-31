import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../nav.jsx'
import FLeft from './left.jsx'
import './feidian.css'
class FD extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:this.props.location.pathname,
            query:this.props.location
        }
    }
    render(){
        return (
            <div>
                <Nav urlLocation={this.state.url}/>
                <div className="feidian">
                    <FLeft/>
                </div>
            </div>
        )
    }
}
export default FD