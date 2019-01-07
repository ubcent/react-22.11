import Layout from 'components/Layout';
import Post from 'containers/PostsContainer';
import PostsContainer from 'containers/PostContainer';
import NotFound from 'components/NotFound';
import CommentsListContainer from 'containers/CommentsListContainer';
import UsersContainer from 'containers/UsersContainer';
import CommentContainer from 'containers/CommentContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/posts',
        exact: true,
        component: Post,
    },
    {
        path: '/posts/:id',
        exact: true,
        component: PostsContainer,
    },
    {
        path: '/comments',
        exact: true,
        component: CommentsListContainer,
    },
    {
        path: '/comments/:id',
        exact: true,
        component: CommentContainer,
    },
    {
        path: '/users',
        exact: true,
        component: UsersContainer,
    },
    {
        component: NotFound,
    }

]