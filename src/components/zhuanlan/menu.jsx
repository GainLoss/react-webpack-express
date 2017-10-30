import React from 'react';
import ReactDOM from 'react-dom';
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'


class ZlMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            HomeMenuone:[
                {name:'全部',mark:'hot'},
                {name:'Android',mark:'new'},
                {name:'前端',mark:'comment'},
                {name:'iOS',mark:'comment'},
                {name:'后端',mark:'comment'},
                {name:'设计',mark:'comment'},
                {name:'工具资源',mark:'comment'},
                {name:'人工智能',mark:'comment'},
            ],
            HomeMenutwo:[
                {name:'热门',mark:'weekHot'},
                {name:'最新',mark:'monthHot'},
                {name:'评论',mark:'allHot'},
            ]
        }
    }
    render(){
        let homeMainLeftTwodiv1={float:"left"}
        let homeMainLeftTwodiv2={float:"right"}
        let rightImg={margin:'20px 0px 0px 0px'}
        let homeMainLeftone={"font-size":"18px",float:'left',"margin-left":"20px"}
        let homeMainLefttow={float:'right',"margin-right":"20px"}
        
        return(
            <div className="homeMenu">
                <div className="homeMenuCon">
                    <div style={homeMainLeftTwodiv1}>
                        {
                            this.state.HomeMenuone.map((item,index)=>
                                <span key={index}>{item.name}</span>
                            )
                        }
                    </div>
                </div>
                <div className="homeMain">
                    <div className="homeMainLeft">
                        <div class="homeMainLeft-one">
                            <div style={homeMainLeftone}>原创文章</div>
                            <div>
                                <div style={homeMainLeftTwodiv2}>
                                    {
                                        this.state.HomeMenutwo.map((item,index)=>
                                            <span key={index}>{item.name}</span>
                                        )
                                    }
                                </div>
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
export default ZlMenu