// @flow
import * as React from 'react';

import { BOX_BLUE } from '../../common/variables';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconShare = ({ className = '', color = BOX_BLUE, height = 26, title, width = 26 }: Props) => (
    <AccessibleSVG
        className={`icon-share ${className}`}
        height={height}
        title={title}
        viewBox="0 0 26 26"
        width={width}
    >
        <path
            className="fill-color"
            d="M25 13c0-6.6-5.4-12-12-12S1 6.4 1 13s5.4 12 12 12 12-5.4 12-12zM0 13C0 5.8 5.8 0 13 0s13 5.8 13 13-5.8 13-13 13S0 20.2 0 13z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M12.7 17.6c-1.2 1.2-3.1 1.2-4.3 0-1.2-1.2-1.2-3.1 0-4.3l1-1c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-1 1c-1.6 1.6-1.6 4.1 0 5.7 1.6 1.6 4.1 1.6 5.7 0l1-1c.2-.2.2-.5 0-.7s-.5-.2-.7 0l-1 1zM13.3 8.4c1.2-1.2 3.1-1.2 4.3 0 1.2 1.2 1.2 3.1 0 4.3l-1 1c-.2.2-.2.5 0 .7s.5.2.7 0l1-1c1.6-1.6 1.6-4.1 0-5.7-1.6-1.6-4.1-1.6-5.7 0l-1 1c-.2.2-.2.5 0 .7s.5.2.7 0l1-1z"
            fill={color}
        />
        <path
            className="fill-color"
            d="M10.4 15.1l4.2-4.2c.2-.2.5-.2.7 0 .2.2.2.5 0 .7l-4.2 4.2c-.2.2-.5.2-.7 0-.2-.2-.2-.5 0-.7z"
            fill={color}
        />
    </AccessibleSVG>
);

export default IconShare;
