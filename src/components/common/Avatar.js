import React from 'react';

import './Avatar.css';

function Avatar(props) {
    return (
        <img src={props.url} className='img-thumbnail user-avatar' alt='...' />
    );
}
export default Avatar;
