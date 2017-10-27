import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.jsx';


class Home extends React.Component{
    render(){
        return (
           <div>
            <Nav/>
            <h1>这是内容页</h1>
           </div>
        )
    }
}
export default Home


