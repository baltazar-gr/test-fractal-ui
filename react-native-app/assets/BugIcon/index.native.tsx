import React, {memo} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BugIcon = memo(
  (props: SvgProps): JSX.Element => {
    return (
      <Svg
        focusable={false}
        viewBox="0 0 30 30"
        width={30}
        height={30}
        {...props}>
        <Path d="M10.031 2.904a1 1 0 00-.97 1.354S9.749 6 11.488 7.08c-.407.124-1.074.465-1.685 1.377a7.653 7.653 0 01-.953-.36 4.157 4.157 0 01-.891-.55c-.16-.134-.154-.14-.154-.14A1 1 0 007 7H5a1 1 0 100 2h1.596c.04.038.031.039.078.078a6.16 6.16 0 001.316.824C9.193 10.474 11.083 11 13.936 11a1 1 0 00.205-.02c.29.007.556.02.877.02.309 0 .565-.011.845-.018a1 1 0 00.201.018c2.853 0 4.743-.526 5.946-1.098a6.16 6.16 0 001.316-.824c.047-.039.037-.04.078-.078H25a1 1 0 100-2h-2a1 1 0 00-.805.406s.006.007-.154.14c-.16.135-.44.338-.89.552a7.634 7.634 0 01-.973.365c-.62-.924-1.27-1.265-1.66-1.387 1.734-1.08 2.421-2.818 2.421-2.818a1 1 0 00-.9-1.354 1 1 0 00-.978.672s-.504 1.513-2.178 2.1A2.977 2.977 0 0015 5a2.98 2.98 0 00-1.883.676c-1.674-.587-2.178-2.1-2.178-2.1a1 1 0 00-.908-.672zM5.963 11a1 1 0 00-.28.05l-3 1a1 1 0 00.633 1.9l2.655-.886c.096.048.378.172.62.28A8.341 8.341 0 006 16.426c0 1.523.309 2.864.795 4.027l-.635 1.904-2.715 1.811a1 1 0 101.11 1.664l3-2a1 1 0 00.394-.516l.188-.564C9.8 24.902 11.988 26 13 26c.742 0 1-.58 1-1v-9a1 1 0 112 0v9c0 .42.258 1 1 1 1.012 0 3.2-1.098 4.863-3.248l.188.564a1 1 0 00.394.516l3 2a1 1 0 101.11-1.664l-2.715-1.81-.635-1.905c.486-1.163.795-2.504.795-4.027a8.341 8.341 0 00-.592-3.082c.243-.108.525-.232.621-.28l2.655.885a1 1 0 10.632-1.898l-3-1a1 1 0 00-.295-.051 1 1 0 00-.468.105s-2.892 1.404-6.04 1.791A32.19 32.19 0 0115 13c-.915 0-1.74-.044-2.514-.104-3.147-.387-6.039-1.79-6.039-1.79A1 1 0 005.963 11z" />
      </Svg>
    );
  },
);

BugIcon.displayName = 'BugIcon';

export {BugIcon};