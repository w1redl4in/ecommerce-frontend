import React from 'react';
import { Menu as AntdMenu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import theme from '../../theme/theme';

const Menu = (
  <AntdMenu>
    <AntdMenu.Item>
      <Link to="/products/clothes">
        <Typography.Text style={theme.gradientText}>Roupas</Typography.Text>
      </Link>
    </AntdMenu.Item>
    <AntdMenu.Item>
      <Link to="/products/miscellaneous">
        <Typography.Text style={theme.gradientText}>Acessórios</Typography.Text>
      </Link>
    </AntdMenu.Item>
    <AntdMenu.Item>
      <Link to="/products/shoes">
        <Typography.Text style={theme.gradientText}>Calçados</Typography.Text>
      </Link>
    </AntdMenu.Item>
  </AntdMenu>
);

export default Menu;
