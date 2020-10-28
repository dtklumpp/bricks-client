import {Switch, Route} from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Test from '../pages/Test'
import Default from '../components/default/default';
export default Routes;

function Routes() {
    return <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/default' component={Default}/>
        <Route path='/test' component={Test}/>
    </Switch>
}
