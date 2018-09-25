// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Img } from '../../shared/Img/Img';
//import { Link } from 'react-router-dom';
import { Day, Month, MonthFull, Year } from '../../shared/Date/Date';


// COMPONENT

function insertImg(media) {
    if(media)
        return (<Img className={'list-blog-img'} imgName={ media.provider_reference } />);
}

function insertTags(tags) {
    if(tags)
        return (tags.map(tag => 
            <a key={tag.id} href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                {tag.name + ' '} 
            </a>
        ));
}

const BlogItem = (props) => (
    <Fragment>
        <div className="wrap-pic-w how-pos5-parent">
            { insertImg(props.blog.media) }
            <div className="flex-col-c-m size-123 bg9 how-pos5">
                <span className="ltext-107 cl2 txt-center">
                    <Day date={props.blog.created_at} />
                </span>

                <span className="stext-109 cl3 txt-center">
                    <Month date={props.blog.created_at} />
                    &nbsp;/&nbsp;
                    <Year date={props.blog.created_at} />
                </span>
            </div>
        </div>

        <div className="p-t-32">
            <span className="flex-w flex-m stext-111 cl2 p-b-19">
                <span>
                    <span className="cl4">By</span> Admin  
                    <span className="cl12 m-l-4 m-r-6">|</span>
                </span>

                <span>
                    <Day date={props.blog.created_at} />&nbsp;
                    <MonthFull date={props.blog.created_at} />,&nbsp;
                    <Year date={props.blog.created_at} />
                </span>
            </span>

            <h4 className="ltext-109 cl2 p-b-28">
                { props.blog.title }
            </h4>

            <p className="stext-117 cl6 p-b-26">
                { props.blog.content }
            </p>
        </div>

        <div className="flex-w flex-t p-t-16">
            <span className="size-216 stext-116 cl8 p-t-4">
                Tags
            </span>

            <div className="flex-w size-217">
                { insertTags(props.blog.tags) }
            </div>
        </div>
    </Fragment>
);

BlogItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

export { BlogItem };