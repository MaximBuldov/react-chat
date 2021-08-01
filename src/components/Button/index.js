import React from 'react';
import PropTypes from 'prop-types';
import { Button as AnButton } from 'antd';
import classNames from "classnames";
import './Button.scss';

const Button = (props) => {
    return (
        <AnButton {...props} className={classNames('button', props.className, {'button__large': props.size === "large"})}>{props.children}</AnButton>
    );
};

Button.propTypes = {
    className: PropTypes.string
}

export default Button;