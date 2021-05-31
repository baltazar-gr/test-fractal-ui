import React, { memo, SVGProps } from 'react';

const NextIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => {
        return (
            <svg focusable={false} width='16' height='16' viewBox='0 0 16 16' {...props}>
                <g fillRule='evenodd' stroke='none' strokeWidth='1'>
                    <g fillRule='nonzero' transform='translate(-292 -136)'>
                        <g transform='translate(16 53)'>
                            <g transform='translate(264 71)'>
                                <path d='M12.889 12a.889.889 0 00-.889.889V27.11a.889.889 0 001.415.715h.002a.889.889 0 00.024-.019l9.707-7.059a.889.889 0 00.013-1.486l-9.744-7.088a.889.889 0 00-.528-.174zm13.778 0c-.736 0-1.334.597-1.334 1.333v13.334a1.334 1.334 0 002.667 0V13.333c0-.736-.597-1.333-1.333-1.333z' />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
);

NextIcon.displayName = 'NextIcon';

export { NextIcon };
