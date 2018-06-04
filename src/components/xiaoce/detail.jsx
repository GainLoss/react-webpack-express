import React from 'react'
import ReactDOM from 'react-dom'

class D extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentWillMount(){
        fetch('/find/xiaoce/list',{
            method:'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
        }).then((response)=>{
            if(response&&response.status===200){
                return response.json()
            }
        }).then((data)=>{
            console.log(data)
            this.setState({result:data})
        })
    }
    render(){
        return(
            <div>
                {
                    this.state.result.map((item,index)=>
                        <div className='detail' key={index}>
                            <div className='detail_l'></div>
                            <div className='detail_r'>
                                <h5>{item.title}</h5>
                                <h5>{item.user}</h5>
                                <p>{item.con}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default D