// import React from 'react'
// import ReactDOM from 'react-dom'

// import Title from './components/index.jsx';
// console.log(Title)
// ReactDOM.render(
//     <Title/>,
//     document.body
// )
if (module.hot) {
    module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './router/router.jsx';


ReactDOM.render(
    <App/>,
    document.getElementById('content')
);

