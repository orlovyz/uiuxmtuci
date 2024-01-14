import Router from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return<div className='HomeButton'>
        <Link to="/">
        <img style={{ width: 50, height: 50 }} src="https://free-icon-rainbow.com/i/icon_00569/icon_005690_256.png" alt="Main Page" />
        </Link>
    </div>
}

export default Navigation;