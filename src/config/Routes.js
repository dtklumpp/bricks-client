import {Switch, Route} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Test from '../pages/Test';
import Cats from '../pages/Cats';
import Leaders from '../pages/Leaders';
import Map from '../pages/Map';
import Project from '../pages/Project';

import Default from '../components/default/default';
export default Routes;

function Routes() {
    return <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/default' component={Default}/>
        <Route path='/test' component={Test}/>
        <Route path='/cats' component={Cats}/>
        <Route path='/leaders' component={Leaders}/>
        <Route path='/map' component={Map}/>
        <Route path='/project' component={Project}/>
    </Switch>
}
