import React from 'react';

const Title = ({children, className}) => {
    return (
        <h2 className={`text-center text-3xl font-semibold text-slate-800 ${className}`}>
            {children}
        </h2>
    );
};

export default Title;