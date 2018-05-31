import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../nav.jsx'

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
            <div>
                <Nav urlLocation={this.state.url}/>
                活动
            </div>
        )
    }
}
export default HD