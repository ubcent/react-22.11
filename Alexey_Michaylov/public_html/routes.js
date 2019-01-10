import HomePage from 'components/HomePage';
import BlogpostList from 'containers/BlogpostListContainer';
import Post from 'containers/PostContainer';
import CommentsList from 'containers/CommentsListContainer';
import UsersList from 'containers/UsersListContainer';

export default [
    {
        path: '/',
        exact: true,
        component: HomePage,
    },
    {
        path: '/blog',
        exact: true,
        component: BlogpostList,
    },
    {
        path: '/blog/:id',
        exact: true,
        component: Post,
    },
    {
        path: '/comments',
        exact: true,
        component: CommentsList,
    },
    {
        path: '/users',
        exact: true,
        component: UsersList,
    },
]
