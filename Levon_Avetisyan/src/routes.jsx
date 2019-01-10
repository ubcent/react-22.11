import PostFormContainer from 'containers/PostFormContainer';
import UsersContainer from 'containers/UsersContainer';

export default [
    {
        path: '/',
        exact: true,
        component: PostFormContainer,
    },
    {
        path: '/users',
        exact: true,
        component: UsersContainer,
    },
]