// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getBlog } from '../../state/actions/BlogActions';
import { Img } from '../../shared/Img/Img';


// COMPONENT

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getBlog(this.props.slug);
    }

    formatDateInDay(date) {
        var newDate = new Date(date);
        var day = newDate.getDay();
        return day;
    }

    formatDateInMonth(date) {
        var months = [
            'Janvier',
            'Fevrier',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Septembre',
            'Octobre',
            'Novembre',
            'Decembre'
        ];
        var newDate = new Date(date);
        var month = months[newDate.getMonth()];
        return month;
    }

    formatDateInYear(date) {
        var newDate = new Date(date);
        var year = newDate.getFullYear();
        return year;
    }

    insertImg() {
        if(this.props.blog.media)
            return (<Img className={'list-blog-img'} imgName={ this.props.blog.media.provider_reference } />);
    }

    insertTags() {
        if(this.props.blog.tags)
            return (this.props.blog.tags.map(tag => 
                <a key={tag.id} href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                    {tag.name + ' '} 
                </a>
            ));
    }

    render() {
        return (
            <div className="p-r-45 p-r-0-lg">
                <div className="wrap-pic-w how-pos5-parent">
                    { this.insertImg() }

                    <div className="flex-col-c-m size-123 bg9 how-pos5">
                        <span className="ltext-107 cl2 txt-center">
                            { this.formatDateInDay(this.props.blog.created_at) }
                        </span>

                        <span className="stext-109 cl3 txt-center">
                            { this.formatDateInMonth(this.props.blog.created_at) }
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
                            { this.formatDateInDay(this.props.blog.created_at) + ' ' + this.formatDateInMonth(this.props.blog.created_at) + ', ' + this.formatDateInYear(this.props.blog.created_at)}
                        </span>
                    </span>

                    <h4 className="ltext-109 cl2 p-b-28">
                        { this.props.blog.title }
                    </h4>

                    <p className="stext-117 cl6 p-b-26">
                        { this.props.blog.content }
                    </p>
                </div>

                <div className="flex-w flex-t p-t-16">
                    <span className="size-216 stext-116 cl8 p-t-4">
                        Tags
                    </span>

                    <div className="flex-w size-217">
                        { this.insertTags() }
                    </div>
                </div>
            </div>
        );
    }
}

Blog.propTypes = {
    slug: PropTypes.string.isRequired,
    getBlog: PropTypes.func.isRequired,
    blog: PropTypes.object,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blog } = state.blogs;
    return { blog };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getBlog }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Blog);


// EXPORT COMPONENT

export { hoc as Blog };