// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const Pagination = (props) => {
    return(
        <div className="flex-l-m flex-w w-full p-t-10 m-lr--7">
            { 
                props.pageNumbers.map(number => { 
                    let className = 'flex-c-m how-pagination1 trans-04 m-all-7';
                    if(props.currentPage == number)
                        className += ' active-pagination1';
                    return (
                        <div key={number} id={number} onClick={props.handleClick} className={className}>
                            {number}
                        </div>
                    );
                })
            }
        </div>
    );
};


// CONFIGURE COMPONENT PROP TYPES

Pagination.propTypes = {
    pageNumbers: PropTypes.array.isRequired,
    currentPage: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired
};


// EXPORT COMPONENT

export { Pagination };