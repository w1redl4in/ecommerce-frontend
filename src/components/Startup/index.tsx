import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLoginActionSuccess } from '../../store/modules/auth';

export const Startup: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const user = sessionStorage.getItem('user');

    if (token && user)
      dispatch(
        fetchLoginActionSuccess({
          token,
          user: JSON.parse(user),
        })
      );
  }, [dispatch]);
  return <></>;
};
