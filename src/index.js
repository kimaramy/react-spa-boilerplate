import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import 'normalize.css'
import 'nprogress/nprogress.css'
import './assets/css/custom-nprogress.css'
import './assets/css/global.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
