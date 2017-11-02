import React from 'react';
import { Link } from 'react-router-dom';
import homeEveryImgLike from './img/like.png';
import homeEveryImgMs from './img/message.png';
import { HashRouter, Route } from 'react-router-dom';

//组件
import Hdetail from './detail.jsx'

class FindEvery extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            tab:props.tab,
            sort:props.sort
        }
    }
    //父组件state变化的时候，这个函数会执行
    componentWillReceiveProps(nextProps){
        let that=this;
        let tab=nextProps.tab||'attention';
        let sort=nextProps.sort||'like'
        fetch("/find/list/show",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "tab="+tab+"&sort="+sort
        }).then((response)=>{
            if(response&&response.status===200){
                return response.json();
            }
        }).then((data)=>{
            this.setState({result:data})
        });
    }
    //子组件一开始渲染的时候
    componentWillMount(){
        let that=this;
        fetch("/find/list/show",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: "tab="+this.state.tab+"&sort="+this.state.sort
        }).then((response)=>{
            if(response&&response.status===200){
                return response.json();
            }
        }).then((data)=>{
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
export default FindEvery