import React from 'react'
import ReactDOM from 'react-dom'

class D extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='detail'>
                    <div className='detail_l'></div>
                    <div className='detail_r'>
                        <h5>主题</h5>
                        <h5>作者</h5>
                        <p>内容内容</p>
                    </div>
                </div>
                <div className='detail'>
                    <div className='detail_l'></div>
                    <div className='detail_r'>
                        <h5>主题</h5>
                        <h5>作者</h5>
                        <p>内容内容</p>
                    </div>
                </div>
                <div className='detail'>
                    <div className='detail_l'></div>
                    <div className='detail_r'>
                        <h5>主题</h5>
                        <h5>作者</h5>
                        <p>内容内容</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default D