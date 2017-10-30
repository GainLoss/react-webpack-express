import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
//首页 专栏 发现 收藏级 开源库
import Home from '../components/home/home.jsx';
import Zl from '../components/zhuanlan/view.jsx';
import Find from '../components/find/view.jsx';
import Collect from '../components/collect/view.jsx';
import Open from '../components/open/view.jsx';

const PrimaryLayout = () => (
    <div className="primary-layout">
     
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/zhuanlan" component={Zl}/>
        <Route path="/find" component={Find}/>
        <Route path="/collect" component={Collect}/>
        <Route path="/open" Component={Open}/>
      </main>
    </div>
)
  
const App = () => (
    <HashRouter>
      <PrimaryLayout />
    </HashRouter>
)
export default App;
