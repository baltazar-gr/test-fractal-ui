import React, {memo, SVGProps} from 'react';

const UploadIcon = memo(
  (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
      <svg
        focusable={false}
        width={25}
        height={21}
        viewBox="0 0 25 21"
        {...props}>
        <g fillRule="evenodd">
          <path d="M13.125 19.648v-8.592l2.049 2.075a.72.72 0 001.025 0 .74.74 0 000-1.037L12.913 8.77a.821.821 0 00-.111-.092c-.017-.01-.034-.017-.05-.027a.633.633 0 00-.075-.04c-.022-.009-.044-.014-.065-.02-.024-.007-.047-.016-.07-.02-.038-.009-.075-.01-.112-.012-.011 0-.02-.004-.03-.004-.012 0-.022.004-.033.004a.67.67 0 00-.108.011c-.026.006-.05.016-.075.023-.02.007-.04.01-.061.018a.616.616 0 00-.08.043c-.015.008-.03.014-.045.024a.751.751 0 00-.111.092l-3.285 3.324a.736.736 0 000 1.037.718.718 0 001.024 0l2.049-2.075v8.593c0 .405.324.733.723.733a.73.73 0 00.727-.734z" />
          <path d="M20.703 6.285c-.224-3.37-3.005-6.042-6.39-6.042-2.13 0-4.103 1.09-5.28 2.824a3.81 3.81 0 00-1.514-.315c-2.006 0-3.663 1.541-3.876 3.514A5.4 5.4 0 00.21 11.324c0 2.998 2.41 5.437 5.373 5.437h4.08v-1.255H5.582c-2.283 0-4.133-1.87-4.133-4.182a4.16 4.16 0 013.46-4.112 2.624 2.624 0 01-.05-.513c0-1.488 1.19-2.692 2.66-2.692.78 0 1.474.345 1.96.886.736-1.983 2.62-3.395 4.834-3.395 2.853 0 5.165 2.34 5.165 5.227 0 .166-.006.332-.024.494a4.166 4.166 0 013.383 4.105c0 2.313-1.85 4.182-4.133 4.182h-3.616v1.255h3.616c2.962 0 5.372-2.44 5.372-5.437a5.434 5.434 0 00-3.373-5.04z" />
        </g>
      </svg>
    );
  },
);

UploadIcon.displayName = 'UploadIcon';

export {UploadIcon};
