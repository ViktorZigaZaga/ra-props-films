import React from "react";
import PropsTypes from 'prop-types';
import Star from './Star'

function Stars(props) {
    const {count = 0} = props;
    if(count < 0 || count > 5) {
        return null;
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {
                new Array(count).fill(0).map((item, i) => <Star key={Date.now() + i} />)
            }
        </ul>
    );
}

Stars.propsTypes = {
    count: PropsTypes.number.isRequired
}

export default Stars