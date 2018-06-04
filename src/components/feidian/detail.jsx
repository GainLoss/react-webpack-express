import React from 'react'
import ReactDOM from 'react-dom'
import './feidian.css'

class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[{title:1},{title:2}]
        }
    }
    componentWillMount(){
        fetch('/feidian/list/show',{
            method:'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then((response)=>{
            if(response&&response.status===200){
               return response.json() 
            }
        }).then((data)=>{
            this.setState({result:data})

        })
        
    }
    render(){
       return(
        <div>
            {
                this.state.result.map((item,index)=>
                    <div className="fdetail" key={index}>
                        <h5>{item.title}</h5>
                        <h5>{item.user} -- {item.time}</h5>
                        <p>{item.con}</p>
                    </div>
                )
            }

        </div>
       )
    }
}

export default Detail