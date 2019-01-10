import MainPage from 'components/MainPage';
import Blog from 'containers/BlogContainer';
import PostDetails from 'containers/PostDetailsContainer';
import Comments from 'containers/CommentsContainer';
import Users from 'containers/UsersContainer';
import UserInfo from 'containers/UserInfoContainer';

export default [
    {
        path: '/',
        exact: true,
        component: MainPage,
    },
    {
        path: '/blog',
        exact: true,
        component: Blog,
    },
    {
        path: '/blog/:id',
        exact: true,
        component: PostDetails,
    },
    {
        path: '/comments',
        exact: true,
        component: Comments,
    },
    {
        path: '/users',
        exact: true,
        component: Users,
    },
    {
        path: '/users/:id',
        exact: true,
        component: UserInfo,
    },
]
