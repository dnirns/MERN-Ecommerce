import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'fontsource-roboto'
import 'fontsource-work-sans'
import 'fontsource-fira-sans'
import './styles/main.scss'
import App from './App'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
