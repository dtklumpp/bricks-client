import {NavLink} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';

import MenuInverted from './MenuInverted';

export default Header;


function Header() {
    return (<>
        <Grid>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/default'>Default</NavLink>
                    </li>
                    <li>
                        <NavLink to='/test'>Test</NavLink>
                    </li>
                </ul>
            </Grid.Column>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/cats'>Cats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaders'>Leaders</NavLink>
                    </li>
                    <li>
                        <NavLink to='/map'>Map</NavLink>
                    </li>
                    <li>
                        <NavLink to='/project'>Project</NavLink>
                    </li>
                </ul>
            </Grid.Column>
            <Grid.Column width={1}>
                <ul>
                    <li>
                        <NavLink to='/visx'>Visx</NavLink>
                    </li>
                    <li>
                        <NavLink to='/template'>Template</NavLink>
                    </li>
                    <li>
                        <NavLink to='/treact'>Treact</NavLink>
                    </li>
                </ul>
            </Grid.Column>

        </Grid>
        <MenuInverted/>
    </>
    )
}
