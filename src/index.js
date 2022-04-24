import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import 'normalize.css'
import 'nprogress/nprogress.css'
import './assets/custom-nprogress.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
