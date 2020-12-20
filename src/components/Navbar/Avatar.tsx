import React, { useCallback } from 'react';
import { Avatar as AntdAvatar, Dropdown, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { signOutAction } from '../../store/modules/auth';

const Avatar: React.FC = () => {
  const dispatch = useDispatch();

  const handleExit = useCallback(() => {
    dispatch(signOutAction());
  }, [dispatch]);

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Perfil
        </a>
      </Menu.Item>
      <Menu.Item danger onClick={handleExit}>
        Exit
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <AntdAvatar
        style={{ cursor: 'pointer' }}
        src="https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        shape="circle"
      />
    </Dropdown>
  );
};

export default Avatar;
