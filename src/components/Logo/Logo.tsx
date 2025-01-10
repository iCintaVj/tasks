import React from 'react';

const Logo: React.FC<any> = ({title}) => {
    return (
        <div className="logo">
            <h1>{title}</h1>
      </div>
    );
};

export default Logo;