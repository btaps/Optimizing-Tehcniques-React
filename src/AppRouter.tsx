// src/AppRouter.tsx

import React, { FunctionComponent, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
// import MyPage from './pages/MyPage/MyPage'

// Lazy loading
const MyPage = lazy(() => import('./pages/MyPage/MyPage'))

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/MyPage" component={MyPage} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

/*
// TODO EE: To replace Recoil with Redux Toolkit;

import { Provider } from 'react-redux'
import store from './redux/store'

<Router>
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Provider>
</Router>

 */

/*

// TODO: EE: Without Recoil or Redux Toolkit;

// src/AppRouter.tsx

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  )
}

 */

export default AppRouter
