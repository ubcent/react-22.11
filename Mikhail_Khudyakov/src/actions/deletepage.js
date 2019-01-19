import {createAction} from 'redux-actions';

export const DeletePage = createAction('[Page] Delete');

export const Delete = () => (dispatch) => {
    dispatch(DeletePage());
};
