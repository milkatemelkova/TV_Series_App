import React from 'react';
import LoaderSrc from '../../assets/loader.png'

const Loader = props => (
    <div>
        <img 
        style = {{width: 75}}
        src={LoaderSrc} 
        alt="Loader icon"/>
    </div>
);

export default Loader;