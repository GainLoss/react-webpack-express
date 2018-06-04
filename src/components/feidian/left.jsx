import React from 'react'
import ReactDOM from 'react-dom'
import Nav from '../nav.jsx'
import './feidian.css'
import $ from 'jquery'
import Detail from './detail.jsx'


import createHashHistory from 'history/createHashHistory'
const history =createHashHistory();

class FLeft extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentIndex:0,
        }

    }
    clickTab(index,e){       
        this.setState({currentIndex:index});
        var name='';
        if(index===0){
            name='tj'
        }else{
            name='dt'
        }
        history.push({pathname:'/feidian/'+name})
    }
    render(){
        var styles={
            width:'100%',
            height:'300px'
        }
        var index=this.state.currentIndex;
        return (
            <div className="f_left">
                <textarea className="f_left_text"></textarea>
                <div className='f_left_text_choose'>
                    <span>图片</span>
                    <span>链接</span>
                    <span>话题</span>
                    <button>发布</button>
                </div>
                <div className='choose_tab'>
                    <span onClick={this.clickTab.bind(this,0)} className={this.state.currentIndex===0?'active':''}>推荐</span>
                    <span onClick={this.clickTab.bind(this,1)} className={this.state.currentIndex===1?'active':''}>动态</span>
                </div>
                <div className='choose_con'>
                    <Detail/>
                </div>
            </div>
        )
    }
}
export default FLeft
