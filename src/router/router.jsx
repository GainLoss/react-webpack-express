import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from '../components/index.jsx';
import Home from '../components/home.jsx';

const PrimaryLayout = () => (
    <div className="primary-layout">
      {/* 这是组件渲染的位置 */}
      <main>
        <Route path="/" exact component={Index} />
        <Route path="/home" component={Home} />
      </main>
    </div>
)
  
const App = () => (
    <BrowserRouter>
      <PrimaryLayout />
    </BrowserRouter>
)
export default App;
