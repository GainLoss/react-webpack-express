//当你只想匹配'/roster'时，你需要使用"exact"参数
// 则路由仅匹配'/roster'而不会匹配'/roster/2'
import React from 'react'
import { HashRouter,Route,BrowserRouter,Router,hashHistory,Switch} from 'react-router-dom'
//首页 专栏 发现 收藏级 开源库
import Home from '../components/home/view.jsx';
import Zl from '../components/zhuanlan/view.jsx';
import Find from '../components/find/view.jsx';
import Collect from '../components/collect/view.jsx';
import Open from '../components/open/view.jsx';
import Write from '../components/write.jsx';
import Hdetail from '../components/home/detail.jsx';



const PrimaryLayout = () => (
    <div className="primary-layout">
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/detail" exact component={Hdetail} />
            <Route path="/Write" exact component={Write}/>
            <Route path="/zhuanlan" exact component={Zl}/>
            <Route path="/find" exact component={Find}/>
            <Route path="/collect" exact component={Collect}/>
            <Route path="/open" exact component={Open}/>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
)
  
const App = () => (
    <HashRouter>
      <PrimaryLayout />
    </HashRouter>
)
export default App;
