import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../nav.jsx';
import fetch from 'isomorphic-fetch';
import '../style/detail.css'
//图片
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'

class Hdetail extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentDidMount(){
        if(this.props.location.search){
            let idValue=this.props.location.search.split('=')[1];
            fetch('/list/detail',{method:'POST',headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },body: `id=${idValue}`}).then((response)=>{
                return response.json()
            }).then((result)=>{
                this.setState({result:result})
            })
        }
    }
    render(){
        let rightImg={margin:'20px 0px 0px 0px'}
        return(
            <div>
                <Nav/>
                <div className="Hdetail">
                    <div className="HdetailLeft">
                        {
                           this.state.result.map((item,index)=>
                            <div>
                                <div>{item.user}&nbsp;●{item.time}</div>
                                <h2>{item.title}</h2>
                                <div>{item.con}</div>
                            </div>
                        ) 
                        }
                    </div>
                    <div className="HdetailRight">
                        <img src={rightimg1}/>
                        <img style={rightImg} src={rightimg2} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hdetail