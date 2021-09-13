import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Child from './child';
import { Button } from 'semantic-ui-react';

function Navbar() {
    const navStyle = {
      color: 'white'  
    };

    const [data, setData] = useState('');
  
    const parentToChild = () => {
        setData("This is data from Parent Component to the Child Component.");
    }

    const childToParent = (childdata) => {
        setData(childdata);
    }

    return (
        <nav >
            {/* parentToChild name of the prop; data is the Data that we need to pass down to the Child */}
        <Child parentToChild={data} childToParent={childToParent} />
        <div>
            <Button primary onClick={() => parentToChild()}>Click Parent</Button>
        </div>
            <ul className="nav-links">
                <Link style={navStyle} to="/about">
                    <li> About </li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li> Shop </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
