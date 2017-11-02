import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
//组件
import FindEvery from './every.jsx';
import Find from './view.jsx'
//图片
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'
import leftLogo from './img/logo.png'

import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()


class FindMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HomeMenuTop: [
                { name: '全部', tab: 'all' },
                { name: 'Android', tab: 'android' },
                { name: '前端', tab: 'web' },
                { name: 'iOS', tab: 'ios' },
                { name: '后端', tab: 'java' },
                { name: '设计', tab: 'design' },
                { name: '产品', tab: 'product' },
                { name: '工具资源', tab: 'tool' },
                { name: '阅读', tab: 'read' },
                { name: '人工智能', tab: 'inte' },
                
            ],
            HomeMenuone: [
                { name: '热门', sort: 'like' },
                { name: '最新', sort: 'new' },
                { name: '评论', sort: 'collect' },
            ],
            HomeMenutwo: [
                { name: '本周最热', sort: 'weekHot' },
                { name: '本月最热', sort: 'monthHot' },
                { name: '历史最热', sort: 'allHot' },
            ],
            EveryParamsTab:'attention',
            EveryParamsSort:'like',
            menuOne: 'attention',
            menuTwo: 'like',
        }
        this.clickTop = this.clickTop.bind(this)
        this.clickMenu = this.clickMenu.bind(this)
    }
    
    //点击一级菜单事件
    clickTop(event) {
        let that = this;
        let tab = event.currentTarget.dataset.tab;
        that.setState({ menuOne: tab })
        history.push({
            pathname: '/home/'+tab,
        })
        that.serach();
    }
    //点击二级菜单事件
    clickMenu(event) {
        var that = this;
        let sort = event.currentTarget.dataset.sort;
        that.setState({ menuTwo: sort })
        history.push({
            pathname: history.location.pathname,
            search:'sort='+sort
        })
        that.serach();
    }
    serach(){
        let that=this;
        let tab=history.location.pathname.split('/')[2];
        let sort=history.location.search.split('=')[1];
        this.setState({EveryParamsTab:tab});
        this.setState({EveryParamsSort:sort})
    }
    render() {
        let homeMainLeftTwodiv1 = { float: "left" }
        let homeMainLeftTwodiv2 = { float: "right" }
        let rightImg = { margin: '20px 0px 0px 0px' }
        let leftLogoStyle = { width: '50px', height: '50px', marginRight: "20px" }
        //每个组件的特殊样式
        let homeMainLeftTwoH={fontSize:'17px',fontWeight:'bold',marginLeft:'20px',float:'left'}
        let homeMainLeftTwoStyle={marginTop:'0px'}
        return (
            <div className="homeMenu">
                <div className="homeMenuCon">
                    <div className="homeMenuConLeft">
                        {
                            this.state.HomeMenuTop.map((item, index) =>
                                <span key={index} className={this.state.menuOne === item.tab ? "homesortactive" : ""} data-tab={item.tab} onClick={this.clickTop}>
                                    {item.name}
                                </span>
                            )
                        }
                    </div>
                    <div className="homeMenuConRight">
                        <span>标签管理</span>
                    </div>
                </div>
                <div className="homeMain">
                    <div className="homeMainLeft">
                        
                        <div className="homeMainLeft-two" style={homeMainLeftTwoStyle}>
                            <div style={homeMainLeftTwodiv1}>
                                {
                                    this.state.HomeMenuone.map((item, index) =>
                                        <span key={index} className={this.state.menuTwo === item.sort ? "homesortactive" : ""} data-sort={item.sort} onClick={this.clickMenu}>
                                            {item.name}
                                        </span>
                                    )
                                }
                            </div>
                            <div style={homeMainLeftTwodiv2}>
                                {
                                    this.state.HomeMenutwo.map((item, index) =>
                                        <span key={index} className={this.state.menuTwo === item.sort ? "homesortactive" : ""} data-sort={item.sort} onClick={this.clickMenu}>
                                            {item.name}
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                        <div className="homeMainLeft-three">
                            <FindEvery tab={this.state.EveryParamsTab} sort={this.state.EveryParamsSort}/>
                        </div>
                    </div>
                    <div className="homeMainRight">
                        <img src={rightimg1} />
                        <img style={rightImg} src={rightimg2} />
                    </div>
                </div>
            </div>
        )
    }
}
export default FindMenu