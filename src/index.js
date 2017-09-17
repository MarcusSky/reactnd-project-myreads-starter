import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css'

import App from './App'
import SearchBar from './components/SearchBar';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/search" component={SearchBar} />
    </div>
  </BrowserRouter>
), document.getElementById('root'))
