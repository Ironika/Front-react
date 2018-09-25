// IMPORT PACKAGE REFERENCES

import PropTypes from 'prop-types';

// COMPONENT

const Day = (props) => {
    var newDate = new Date(props.date);
    var day = newDate.getDay();
    return (day);
};

const MonthFull = (props) => {
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
    var newDate = new Date(props.date);
    var month = months[newDate.getMonth()];
    if(month)
        return (month);
    else
        return '';
};

const Month = (props) => {
    var months = [
        'Jan',
        'Fev',
        'Mars',
        'Avr',
        'Mai',
        'Juin',
        'Juil',
        'Aout',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    var newDate = new Date(props.date);
    var month = months[newDate.getMonth()];
    if(month)
        return (month);
    else
        return '';
};

const Year = (props) => {
    var newDate = new Date(props.date);
    var year = newDate.getFullYear();
    return (year);
};

Day.propTypes = {
    date: PropTypes.string,
};

MonthFull.propTypes = {
    date: PropTypes.string,
};

Month.propTypes = {
    date: PropTypes.string,
};

Year.propTypes = {
    date: PropTypes.string,
};

export { Day, Month, MonthFull, Year };