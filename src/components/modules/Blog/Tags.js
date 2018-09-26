// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENT

function insertTags(tags) {
    if(tags)
        return (tags.map(tag => 
            <Link to={'/blog/tag/' + tag.slug } key={tag.id} className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">{tag.name + ' '} </Link>
        ));
}

const Tags = (props) => (
    <div className="flex-w m-r--5">
        { insertTags(props.tags) }
    </div>
);

Tags.propTypes = {
    tags: PropTypes.array
};

export { Tags };