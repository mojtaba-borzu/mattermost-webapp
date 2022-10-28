// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type SvgProps = {
    width?: number;
    height?: number;
}

const Svg = (props: SvgProps) => (
    <svg


        width={props.width?.toString() || '357'}
        height={props.height?.toString() || '248'}
        viewBox='0 0 357 248'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
  
    </svg>
);

export default Svg;
