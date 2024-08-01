import React from 'react';
import './styles.css';
const BgEffectComponent = ({children}) => {
    return (
        <div className='relative min-h-screen'>
            <div className="stars"/>
            <div className="twinkling"/>
            <div style={{position: 'relative', zIndex: '100000'}}>
                {children}
            </div>

        </div>
    );
};

export default BgEffectComponent;
