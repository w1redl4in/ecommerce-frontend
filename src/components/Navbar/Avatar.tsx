import React, { useCallback } from 'react';
import { Avatar as AntdAvatar, Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signOutAction } from '../../store/modules/auth';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/rootReducer';

const Avatar: React.FC = () => {
  const dispatch = useDispatch();

  const handleExit = useCallback(() => {
    dispatch(signOutAction());
  }, [dispatch]);

  const { imageUrl } = useSelector((state: AppState) => state.auth.user);

  console.log(imageUrl);

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
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
        src={imageUrl}
        shape="circle"
        size={64}
      />
    </Dropdown>
  );
};

export default Avatar;
