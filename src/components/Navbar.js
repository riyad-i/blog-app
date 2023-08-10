import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <Link to='/'> Home Page </Link>
            <Link to='/signup'> Signup </Link>
        </nav>
    )
}