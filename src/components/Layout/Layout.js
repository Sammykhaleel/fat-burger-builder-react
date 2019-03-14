import React from 'react';

import Aux from '../../hoc/Aux';
const layout = (props) => (
    //place holder will be replaced with three components later on
    <Aux>
        <div>Toolabr, SideDrawer, Backdrop </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;