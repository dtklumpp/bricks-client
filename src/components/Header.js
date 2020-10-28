import {NavLink} from 'react-router-dom';
export default Header;


function Header() {
    return (
        <ul>
            <li>header here</li>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/default'>Default</NavLink>
            </li>
        </ul>
    )
}
