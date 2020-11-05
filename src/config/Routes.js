import {Switch, Route} from 'react-router-dom';
import Cats from '../pages/Cats';
import Leaders from '../pages/Leaders';
import Map from '../pages/Map';
import Project from '../pages/Project';
import Splash from '../pages/Splash';
import Crud from '../pages/CRUD';

import About from '../pages/About';
//ABOUT needed for the CSS for dumb reason

// import Home from '../pages/Home';
// import Test from '../pages/Test';
// import Visx from '../pages/Visx';
// import TreactPage from '../pages/Treact';

// import Default from '../components/default/default';

export default Routes;

function Routes() {
    return <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/cats' component={Cats}/>
        <Route path='/leaders' component={Leaders}/>
        <Route path='/map' component={Map}/>
        <Route path='/project/:id' component={Project}/>
        <Route path='/splash' component={Splash}/>
        <Route path='/crud' component={Crud}/>

        {/* <Route path='/home' component={Home}/> */}
        {/* <Route path='/about' component={About}/> */}
        {/* <Route path='/default' component={Default}/> */}
        {/* <Route path='/test' component={Test}/> */}
        {/* <Route path='/visx' component={Visx}/> */}
        {/* <Route path='/treact' component={TreactPage}/> */}
    </Switch>
}
