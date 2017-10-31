import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
//组件
import Home from './home.jsx';


import HomeEvery from './every.jsx';
import { Link } from 'react-router-dom';

import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'
import leftLogo from './img/logo.png'


class HomeMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            HomeMenuone:[
                {name:'热门',sort:'hot'},
                {name:'最新',sort:'new'},
                {name:'评论',sort:'comment'},
            ],
            HomeMenutwo:[
                {name:'本周最热',sort:'weekHot'},
                {name:'本月最热',sort:'monthHot'},
                {name:'历史最热',sort:'allHot'},
            ],
            query:''
        }
    }
    //准备加载组件
    componentWillMount(){
        if(this.props.hash===undefined){
            this.query='hot'
        }else{
            this.query=this.props.hash
        }
    }
    render(){
        let homeMainLeftTwodiv1={float:"left"}
        let homeMainLeftTwodiv2={float:"right"}
        let rightImg={margin:'20px 0px 0px 0px'}
        let leftLogoStyle={width:'50px',height:'50px',marginRight:"20px"}
        return(
            <div className="homeMenu">
                <div className="homeMenuCon">
                    <div className="homeMenuConLeft">
                        <span>我的关注</span>
                        <span>前端</span>
                    </div>
                    <div className="homeMenuConRight">
                        <span>标签管理</span>
                    </div>
                </div>
                <div className="homeMain">
                    <div className="homeMainLeft">
                        <div className="homeMainLeft-one">
                            <img src={leftLogo} style={leftLogoStyle}/>
                            <span>写文章</span>
                            <span>分享链接</span>
                            <span>草稿</span>
                        </div>
                        <div className="homeMainLeft-two">
                            <div style={homeMainLeftTwodiv1}>
                                {
                                    this.state.HomeMenuone.map((item,index)=>
                                        <span key={index} className={this.query===item.sort?"homesortactive":''}>
                                            <Link to={ 
                                                    { 
                                                        pathname:"/home", 
                                                        search: 'sort='+item.sort,
                                                    } 
                                                }>{item.name}</Link>
                                            
                                            <Route path="/home/:id" component={Home}/>
                                        </span>
                                    )
                                }
                            </div>
                            <div style={homeMainLeftTwodiv2}>
                                {
                                    this.state.HomeMenutwo.map((item,index)=>
                                        <span key={index} className={this.query===item.sort?"homesortactive":''}>
                                            <Link to={ 
                                                    { 
                                                        pathname:"/home", 
                                                        search: 'sort='+item.sort,
                                                    } 
                                                }>{item.name}</Link>
                                            
                                            <Route path="/home/:id" component={Home}/>
                                        </span>
                                    )
                                } 
                            </div>
                        </div>
                        <div className="homeMainLeft-three">
                            <HomeEvery/>
                        </div>
                    </div>
                    <div className="homeMainRight">
                        <img src={rightimg1}/>
                        <img style={rightImg} src={rightimg2} />
                    </div>
                </div>
            </div>
        )
    }
}
export default HomeMenu