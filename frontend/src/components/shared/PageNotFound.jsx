import React from 'react';
const divStyle = {
    padding:'4rem',
    color:'blue'
}
const PageNotFound = () => {
    return (
        <div className='container' style={divStyle}>
            <h1 className='text-center display-1 text-primary'>
                ERROR - 404 - Page not found!
            </h1>
        </div>
    );
};

export default PageNotFound;