import React from 'react'
import ReactDOM from 'react-dom'
import './feidian.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
        <div>
            <div className="fdetail">
                <h5>主题</h5>
                <h5>介绍 -- 时间</h5>
                <p>详情详情详情详情</p>
            </div>
            <div className="fdetail">
                <h5>主题</h5>
                <h5>介绍 -- 时间</h5>
                <p>详情详情详情详情</p>
            </div>
        </div>
       )
    }
}

export default Detail