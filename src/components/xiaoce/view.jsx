import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../nav.jsx'
import './xiaoce.css'
import D from './detail.jsx'

class XC extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:this.props.location.pathname,
            query:this.props.location
        }
    }
    render(){
        return(
            <div>
                <Nav urlLocation={this.state.url}/>
                <div className="xiaoce">
                    <div className='xc_left'><D/></div>
                </div>
            </div>
        )
    }
}
export default XC