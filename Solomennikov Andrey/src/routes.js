import CommentsList from 'containers/CommentsListContainer';
import Main from 'components/Main';
import Content from 'components/Content';
import Users from 'containers/UsersListContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Main
    },

    {
        path: '/comments',
        exact: true,
        component: CommentsList
    },

    {
        path: '/content',
        exact: true,
        component: Content
    },

    {
        path: '/users',
        exact: true,
        component: Users
    },
]