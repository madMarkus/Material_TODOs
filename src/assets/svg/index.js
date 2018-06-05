import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

//Wrapper is created for future use in case of more custom svg-icons
const wrapSvgPath = (path, viewBox = '0 0 24 24') => props => {
  return (
    <SvgIcon {...props} viewBox={viewBox}>
      {path}
    </SvgIcon>
  );
};

const CheckBoxBlankPath = (
  <path
    fill="#fff"
    d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
  />
);

const CheckBoxMarkedPath = (
  <path
    fill="#76FF03"
    d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
  />
);

const ClosePath = (
  <path
    fill="#F44336"
    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
  />
);

export const CheckBoxBlankIcon = wrapSvgPath(CheckBoxBlankPath);
export const CheckBoxMarkedIcon = wrapSvgPath(CheckBoxMarkedPath);
export const CloseIcon = wrapSvgPath(ClosePath);
