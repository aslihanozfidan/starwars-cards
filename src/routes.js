import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterCards from './containers/CharacterCards';
import PlanetsCards from './containers/PlanetsCards';
import StarshipsCards from './containers/StarshipsCards';
import VehiclesCards from './containers/VehiclesCards';
import SpeciesCards from './containers/SpeciesCards';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/characters' component={CharacterCards}/>
      <Route exact path='/planets' component={PlanetsCards}/>
      <Route exact path='/starships' component={StarshipsCards}/>
      <Route exact path='/vehicles' component={VehiclesCards}/>
      <Route exact path='/species' component={SpeciesCards}/>
    </Switch>
  </main>
)

export default Routes;