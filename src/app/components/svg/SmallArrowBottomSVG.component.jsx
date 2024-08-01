import React from 'react';

const ArrowBottomSVGComponent = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={49}
            height={40}
            fill="none"
            {...props}
        >
            <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12.25 15 24.5 25l12.25-10"
            />
        </svg>
    );
};

export default ArrowBottomSVGComponent;
