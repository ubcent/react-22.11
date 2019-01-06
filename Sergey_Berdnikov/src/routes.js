import Layout from 'components/Layout';
import Blog from 'containers/PostsContainer';
import PostsContainer from 'containers/PostContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/posts',
        exact: true,
        component: Blog,
    },
    {
        path: '/post/:id',
        exact: true,
        component: PostsContainer,
    },

]