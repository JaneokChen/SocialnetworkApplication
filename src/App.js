import React, {Component} from 'react'
import {GlobalStyle} from './style'
import Header from './common/header'
import {GlobalStyleIconfont} from './statics/iconfont/iconfont.js'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import Submit from './pages/submit'
import store from './store'

class App extends Component{
  render(){
    return(
      <div>
        <GlobalStyle/>
        <GlobalStyleIconfont/>
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header/>
                <Route path='/' exact component={Home}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
                <Route path='/write' exact component={Write}></Route>
                <Route path='/submit' exact component={Submit}></Route>
              </div>
            </BrowserRouter>
        </Provider>
       </div>
    )
  }
}

export default App
