import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
//组件
import HomeEvery from './every.jsx';
import Home from './home.jsx'
//图片
import rightimg1 from './img/home_right_1.png'
import rightimg2 from './img/home_right_2.png'
import leftLogo from './img/logo.png'


class HomeMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HomeMenuTop: [
                { name: '我的关注', tab: 'all' },
                { name: '前端', tab: 'web' }
            ],
            HomeMenuone: [
                { name: '热门', sort: 'hot' },
                { name: '最新', sort: 'new' },
                { name: '评论', sort: 'comment' },
            ],
            HomeMenutwo: [
                { name: '本周最热', sort: 'weekHot' },
                { name: '本月最热', sort: 'monthHot' },
                { name: '历史最热', sort: 'allHot' },
            ],
            menuOne: 'all',
            menuTwo: 'hot'
        }
        this.clickTop = this.clickTop.bind(this)
        this.clickMenu = this.clickMenu.bind(this)
    }
    componentWillMount(){
        console.log(this.props)
    }
    //点击一级菜单事件
    clickTop(event) {
        let that=this;
        let tab = event.currentTarget.dataset.tab;
        that.setState({ menuOne: tab })
    }
    //点击二级菜单事件
    clickMenu(event) {
        var that = this;
        let sort = event.currentTarget.dataset.sort;
        that.setState({ menuTwo: sort })
    }
    render() {
        let homeMainLeftTwodiv1 = { float: "left" }
        let homeMainLeftTwodiv2 = { float: "right" }
        let rightImg = { margin: '20px 0px 0px 0px' }
        let leftLogoStyle = { width: '50px', height: '50px', marginRight: "20px" }
        return (
            <div className="homeMenu">
                <div className="homeMenuCon">
                    <div className="homeMenuConLeft">
                        {
                            this.state.HomeMenuTop.map((item, index) =>
                                <span key={index} className={this.state.menuOne === item.tab ? "homesortactive" : ""} onClick={this.clickTop}>
                                    
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
                        <div className="homeMainLeft-one">
                            <img src={leftLogo} style={leftLogoStyle} />
                            <span>写文章</span>
                            <span>分享链接</span>
                            <span>草稿</span>
                        </div>
                        <div className="homeMainLeft-two">
                            <div style={homeMainLeftTwodiv1}>
                                {
                                    this.state.HomeMenuone.map((item, index) =>
                                        <span key={index} className={this.state.menuTwo === item.sort ? "homesortactive" : ""} data-sort={item.sort} onClick={this.clickMenu}>
                                            <Link to={
                                                {
                                                    pathname: "/home",
                                                    search: 'sort=' + item.sort,
                                                }
                                            } >{item.name}</Link>

                                            <Route path="/home/:id" component={Home} />
                                        </span>
                                    )
                                }
                            </div>
                            <div style={homeMainLeftTwodiv2}>
                                {
                                    this.state.HomeMenutwo.map((item, index) =>
                                        <span key={index} className={this.state.menuTwo === item.sort ? "homesortactive" : ""} data-sort={item.sort} onClick={this.clickMenu}>
                                            <Link to={
                                                {
                                                    pathname: "/home",
                                                    search: 'sort=' + item.sort,
                                                }
                                            } >{item.name}</Link>

                                            <Route path="/home/:id" component={Home} />
                                        </span>
                                    )
                                }
                            </div>
                        </div>
                        <div className="homeMainLeft-three">
                            <HomeEvery />
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
export default HomeMenu