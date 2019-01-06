import Layout from 'components/Layout';
import Post from 'containers/PostsContainer';
import PostsContainer from 'containers/PostContainer';
import NotFound from 'components/NotFound';

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
        component: NotFound,
    }

]