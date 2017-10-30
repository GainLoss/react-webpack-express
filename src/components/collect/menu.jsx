import React from 'react';
import ReactDOM from 'react-dom';
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'


class CollectMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            HomeMenuone:[
                {name:'热门',mark:'hot'},
                {name:'最新',mark:'new'},
            ],
            HomeMenutwo:[
                {name:'全部',mark:'weekHot'},
                {name:'iOS',mark:'monthHot'},
                {name:'Android',mark:'allHot'},
                {name:'前端',mark:'allHot'},
                {name:'设计',mark:'allHot'},
                {name:'产品',mark:'allHot'},
                {name:'后端',mark:'allHot'},
            ]
        }
    }
    render(){
        let homeMainLeftTwodiv1={float:"left"}
        let homeMainLeftTwodiv2={float:"right"}
        let rightImg={margin:'20px 0px 0px 0px'}
        return(
            <div className="homeMenu">
                <div className="homeMenuCon">
                    <div className="homeMenuConLeft">
                        <span>编辑推荐</span>
                        <span>全部</span>
                    </div>
                    <div className="homeMenuConRight">
                        <span>标签管理</span>
                    </div>
                </div>
                <div className="homeMain">
                    <div className="homeMainLeft">
                        
                        <div className="homeMainLeft-one">
                            <div style={homeMainLeftTwodiv1}>
                                {
                                    this.state.HomeMenuone.map((item,index)=>
                                        <span key={index}>{item.name}</span>
                                    )
                                }
                            </div>
                            <div style={homeMainLeftTwodiv2}>
                                {
                                    this.state.HomeMenutwo.map((item,index)=>
                                        <span key={index}>{item.name}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div class="homeMainLeft-three"></div>
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
export default CollectMenu