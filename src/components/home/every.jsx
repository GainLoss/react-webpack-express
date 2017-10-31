import React from 'react';
import { Link } from 'react-router-dom';
import homeEveryImgLike from './img/like.png';
import homeEveryImgMs from './img/message.png';
import { HashRouter, Route } from 'react-router-dom';

//组件
import Hdetail from './detail.jsx'

class HomeEvery extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[]
        }
    }
    componentWillMount(){
        fetch("/list/show").then((response)=>{
            if(response&&response.status===200){
                return response.json();
            }
        }).then((data)=>{
            console.log(data)
            this.setState({result:data})
        });
    }
    render(){
        let homeEveryLike={padding:"5px 10px",float:"left",border:"1px solid rgba(204,204,204,.5)"}
        let homeEveryImg={width:"15px",height:"15px",float:"left",marginRight:"6px"}
        let homeEverySpan={float:"left",lineHeight:"12px"}
        return(
            <div>
                {
                    this.state.result.map((item,index)=>
                        <div className="homeEveryStyle" key={index}>
                            <div>{item.sort}&nbsp;&nbsp;●&nbsp;&nbsp;{item.user}&nbsp;&nbsp;●&nbsp;&nbsp;{item.time.toLocaleString()}</div>
                            <Route path="/detail/id" component={Hdetail}/>
                            <h3><Link to={{pathname:'/detail',search:'id='+item._id}} >{item.title}</Link></h3>
                            <div>
                                <div style={homeEveryLike}><img style={homeEveryImg} src={homeEveryImgLike}/><p style={homeEverySpan}>{item.like}</p></div>
                                <div style={homeEveryLike}><img style={homeEveryImg} src={homeEveryImgMs}/><span style={homeEverySpan}>{item.collect}</span></div>
                            </div>
                        </div>
                    )
                }
            </div>   
        )
    }
}
export default HomeEvery