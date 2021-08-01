import React from 'react';
import classNames from "classnames";
import './ShadowBox.scss'

const ShadowBox = ({children, className}) => <div className={classNames('shadowBox', className)}>{children}</div> ;

export default ShadowBox;