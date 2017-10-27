import React from 'react'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={
            navList:[
                {name:'首页',link:'index'},
                {name:'专栏',link:'zhuanlan'},
                {name:'收藏集',link:'collect'},
                {name:'发现',link:'find'},
                {name:'开源库',link:'open'}
            ]
        }
    }
    render(){
        return(
            <div class="nav">
                <div>掘金</div>
                <div>
                    <ul>
                    {
                        this.state.navList.map((item,index)=>{
                            return <li key={index}>{item.name}</li>
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav;





