import React from 'react';
import { Link } from 'react-router-dom';
import './style/nav.css'
import navImg1 from '../imges/add.png';
import navImg2 from '../imges/ling.png';
import navLogo from '../imges/logo.png';



class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navList:[
                {name:'首页',link:'/home'},
                {name:'专栏',link:'/zhuanlan'},
                {name:'收藏集',link:'/collect'},
                {name:'发现',link:'/find'},
                {name:'开源库',link:'/open'}
            ]
        }
    }
    render(){
        let navimg1={width:'24px',height:'24px',}
        let navimg2={width:'24px',height:'24px',}
        let navlogo={width:'40px',height:'40px'}
        return(
            <div className="nav">
                <div className="navCon">
                    <div className="navOne"><img src="https://gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"/></div>
                    <div className="navTwo">
                        <ul>
                        {
                            this.state.navList.map((item,index)=>{
                                return <li data-url={item.link} key={index} className={item.link===this.props.urlLocation?'active':''}>
                                <Link to={{pathname:item.link }} >{item.name}</Link>
                                </li>
                            })
                        }
                        </ul>
                    </div>
                    <div className="navThree">
                        <input type="text" placeholder="搜索掘金"/>
                        <img style={navimg1} src={navImg1}/>
                        <img style={navimg2} src={navImg2}/>
                        <img style={navlogo} src={navLogo}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Nav;





