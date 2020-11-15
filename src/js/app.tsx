import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import HomeRoute from './routes/home'
import SettingsRoute from './routes/settings'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={HomeRoute} />
          <Route path="/settings" component={SettingsRoute} />
        </Switch>
      </div>
    </Router>
  )
}

export default App