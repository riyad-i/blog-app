import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='flex flex-row justify-around bg-indigo-500 text-2xl'>
            <Link to='/'> Home Page </Link>
            <Link to='/signup'> Signup </Link>
        </nav>
    )
}