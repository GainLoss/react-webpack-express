import React from 'react';
import ReactDOM from 'react-dom';
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'


class OpenMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            HomeMenuone:[
                {name:'热门',mark:'hot'},
                {name:'最新',mark:'new'},
                {name:'评论',mark:'comment'},
            ],
            HomeMenutwo:[
                {name:'本周最热',mark:'weekHot'},
                {name:'本月最热',mark:'monthHot'},
                {name:'历史最热',mark:'allHot'},
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
                        <span>我的关注</span>
                        <span>前端</span>
                    </div>
                    <div className="homeMenuConRight">
                        <span>标签管理</span>
                    </div>
                </div>
                <div className="homeMain">
                    <div className="homeMainLeft">
                        <div class="homeMainLeft-one">
                            <span>写文章</span>
                            <span>分享链接</span>
                            <span>草稿</span>
                        </div>
                        <div className="homeMainLeft-two">
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
export default OpenMenu