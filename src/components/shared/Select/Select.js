// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import Select2 from 'react-select2-wrapper';


// COMPONENT

const Select = (props) => (
    <div className="flex-w flex-r-m p-b-10">
        <div className="size-203 flex-c-m respon6">
            {props.label}
        </div>

        <div className="size-204 respon6-next">
            <div className="rs1-select2 bor8 bg0">
                <Select2 data={fillSelect(props.datas)} defaultValue={defaultValue(props.datas)} options={{ placeholder: 'Choose one option' }} value={props.value} onChange={props.change} />
            </div>
        </div>
    </div>
);

function defaultValue(datas){
    return datas[0].id;
}

function fillSelect(datas) {
    let current_datas = [];
    datas.map(data => {
        current_datas.push({text: data.name, id: data.id });
    });
    return current_datas;
}

Select.propTypes = {
    label: PropTypes.string.isRequired,
    datas: PropTypes.array.isRequired,
    change: PropTypes.func,
    value: PropTypes.string
};

export { Select };