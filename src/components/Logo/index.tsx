import React from 'react';
import Logo from '../../assets/LOGO.svg';

const EcommerceLogo: React.FC<{ size?: string }> = (props) => {
  return <img src={Logo} alt="logo" width={props.size} />;
};

export default EcommerceLogo;
