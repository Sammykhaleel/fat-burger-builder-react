import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
        <div className={classes.Modal}>
            {props.children}
        </div>
);

export default modal;