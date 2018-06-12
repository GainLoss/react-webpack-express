import React from 'react'
import ReactDOM from 'react-dom'

class HD extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[
                {key:'0',value:'热门活动'},
                {key:'1',value:'北京'},
                {key:'2',value:'上海'},
                {key:'3',value:'广州'},
                {key:'4',value:'深圳'},
                {key:'5',value:'杭州'},
            ]
        }
    }
    render(){
        return(
            <div className="hd_tab">
                <ul className="hd_tab_ul">
                {
                    this.state.result.map((item,index)=>
                        <li key={index}>{item.value}</li>
                    )
                }
               </ul>
            </div>
        )
    }
}
export default HD