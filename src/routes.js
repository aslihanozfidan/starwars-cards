import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterCards from './containers/CharacterCards';
import PlanetsCards from './containers/PlanetsCards';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/characters' component={CharacterCards}/>
      <Route exact path='/planets' component={PlanetsCards}/>
    </Switch>
  </main>
)

export default Routes;