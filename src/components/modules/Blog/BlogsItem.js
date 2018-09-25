// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';


// COMPONENT

function formatDateInDay(date) {
    var newDate = new Date(date);
    var day = newDate.getDay();
    return day;
}

function formatDateInMonth(date) {
    var months = [
        'Jan',
        'Fev',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Jui',
        'Aout',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    var newDate = new Date(date);
    var month = months[newDate.getMonth()];
    return month;
}

function formatDateInYear(date) {
    var newDate = new Date(date);
    var year = newDate.getFullYear();
    return year;
}

const BlogsItem = (props) => (
    <div className='p-b-63'>
        <Link to={'/blogs/' + props.blog.slug } className="hov-img0 how-pos5-parent">
            <Img className={'list-blog-img'} imgName={props.blog.media.provider_reference } />

            <div className='flex-col-c-m size-123 bg9 how-pos5'>
                <span className='ltext-107 cl2 txt-center'>
                    { formatDateInDay(props.blog.created_at) }
                </span>
                <span className='stext-109 cl3 txt-center'>
                    {  formatDateInMonth(props.blog.created_at) + '/' + formatDateInYear(props.blog.created_at) }
                </span>
            </div>
        </Link>

        <div className='p-t-32'>
            <h4 className='p-b-15'>
                <Link to={'/blogs/' + props.blog.slug } className="ltext-108 cl2 hov-cl1 trans-04">{ props.blog.title }</Link>
            </h4>

            <p className='stext-117 cl6'>
                { props.blog.content }
            </p>

            <div className='flex-w flex-sb-m p-t-18'>
                <span className='flex-w flex-m stext-111 cl2 p-r-30 m-tb-10'>
                    <span>
                        <span className='cl4'>By</span> Admin  
                        <span className='cl12 m-l-4 m-r-6'>|</span>
                    </span>

                    <span>
                        { props.blog.tags.map(tag => 
                            tag.name + ' '
                        )}
                    </span>
                </span>

                <Link to={'/blogs/' + props.blog.slug } className="stext-101 cl2 hov-cl1 trans-04 m-tb-10">

                    Continue Reading

                    <i className='fa fa-long-arrow-right m-l-9'></i>
                </Link>
            </div>
        </div>
    </div>
);

BlogsItem.propTypes = {
    blog: PropTypes.object.isRequired,
};

export { BlogsItem };