import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'

import App from './App'
import SearchPage from './SearchPage';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/search" component={SearchPage} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
