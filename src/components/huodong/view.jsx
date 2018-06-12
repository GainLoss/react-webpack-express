import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../nav.jsx'
import Tab from './tab.jsx'
import './huodong.css'

class HD extends React.Component{
    constructor(props){
        super(props)
        this.state={
            url:this.props.location.pathname,
            query:this.props.location
        }
    }
    render(){
        return (
            <div >
                <Nav urlLocation={this.state.url}/>
                <Tab/>
                <div className='huodong'>
                    
                </div>
            </div>
        )
    }
}
export default HD