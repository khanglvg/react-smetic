import * as React from 'react';
import {
    deliveryIcon,
    searchIcon,
    seeMore,
    shoppingCart,
    userShape,
    downArrow,
    checkIcon
} from './svg';

const iconList = {
    seeMore,
    deliveryIcon,
    shoppingCart,
    searchIcon,
    userShape,
    downArrow,
    checkIcon
};

export default class Icon extends React.Component {
    render() {
        const {name, width, height, color} = this.props;
        const icon = iconList[name];
        return (
          <svg width={width} height={height} viewBox={icon.viewBox}>
              {icon.svg({color})}
          </svg>
        );
    }
}