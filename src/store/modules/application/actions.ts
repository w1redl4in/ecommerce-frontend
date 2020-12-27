import { action } from 'typesafe-actions';
import { IReducerAction } from '../../rootReducer';
import { ApplicationActionTypes } from './';

export const changeComponentAction = (
  component: React.FC
): IReducerAction<React.FC> =>
  action(ApplicationActionTypes.CHANGE_COMPONENT, component);

export const fetchImageAction = (image: string): IReducerAction<string> =>
  action(ApplicationActionTypes.SET_IMAGE, image);
