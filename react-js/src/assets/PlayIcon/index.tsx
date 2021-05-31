import React, { memo, SVGProps } from 'react';

const PlayIcon = memo(
    (props: SVGProps<SVGSVGElement>): JSX.Element => {
        return (
            <svg focusable={false} width='20' height='22' viewBox='0 0 20 22' {...props}>
                <g fillRule='evenodd' stroke='none' strokeWidth='1'>
                    <g fillRule='nonzero' transform='translate(-244 -133)'>
                        <g transform='translate(16 53)'>
                            <g transform='translate(212 67)'>
                                <path d='M17.673 13.2a.887.887 0 00-.873.9v19.8c0 .497.39.9.873.9.181 0 .358-.06.506-.169l.002.002 17.31-9.816A.902.902 0 0036 24a.901.901 0 00-.534-.83l-17.285-9.803h-.002a.855.855 0 00-.506-.167z' />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
);

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
