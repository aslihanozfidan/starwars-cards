import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterCards from './containers/CharacterCards';
import PlanetsCards from './containers/PlanetsCards';
import StarshipsCards from './containers/StarshipsCards';
import VehiclesCards from './containers/VehiclesCards';
import SpeciesCards from './containers/SpeciesCards';
import CardDetails from './containers/CardDetails';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/people' component={CharacterCards}/>
      <Route exact path='/planets' component={PlanetsCards}/>
      <Route exact path='/starships' component={StarshipsCards}/>
      <Route exact path='/vehicles' component={VehiclesCards}/>
      <Route exact path='/species' component={SpeciesCards}/>

      <Route path="/people/:id" component={CardDetails}/>
      <Route path="/planets/:id" component={CardDetails}/>
      <Route path="/starships/:id" component={CardDetails}/>
      <Route path="/vehicles/:id" component={CardDetails}/>
      <Route path="/species/:id" component={CardDetails}/>
    </Switch>
  </main>
)

export default Routes;