import HomeContainer from 'containers/HomeContainer';
import BlogContainer from 'containers/BlogContainer';
import CommentsList from 'containers/CommentsListContainer';
import Comment from 'containers/CommentContainer';
import UsersContainer from 'containers/UsersContainer';

export default [
    {
        path: '/',
        exact: true,
        component: HomeContainer,
    },
    {
        path: '/blog',
        exact: true,
        component: BlogContainer,
    },
    {
        path: '/comment',
        exact: true,
        component: CommentsList,
    },
    {
        path: '/comment/:id',
        exact: true,
        component: Comment,
    },
    {
        path: '/user',
        exact: true,
        component: UsersContainer,
    },
]