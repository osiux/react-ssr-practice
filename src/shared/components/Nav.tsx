import React from 'react';
import { Link } from 'react-router-dom';

import routes from '@shared/routes';

const Nav = () => (
    <nav>
        <Link to={routes.HOME}>Home</Link>
    </nav>
);

export default Nav;
