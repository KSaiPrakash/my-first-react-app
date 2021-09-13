import React from 'react'

import { Button } from 'semantic-ui-react';

// Case 1: If you are using a functional component, simply catch the parentToChild in the parameters.

export default function Child({parentToChild, childToParent}) {
    const data = "This is data from Child Component to the Parent Component."
    return (
        <div>
            <Button primary onClick={() => childToParent(data)}>Click Child</Button>
            {parentToChild}
        </div>
    )
}

// Case 2: If you have a class component, then just use this.props.parentToChild.

// export default class Child extends Component {
//     render() {
//         return (
//             <div>
//                 {this.props.parentToChild}
//             </div>
//         )
//     }
// }