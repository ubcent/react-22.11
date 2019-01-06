import Counter from './components/Counter';
import CommentsList from 'containers/CommentsListContainer.jsx';
import CommentContainer from 'containers/CommentContainer.jsx';
import TopBilboard from 'components/TopBilboard';
import Header from 'components/Header';

export default [
    {
        path: '/',
        exact: true,
        component: TopBilboard,
    },
    {
        path: '/comments',
        exact: true,
        component: Header,
    },
    {
        path: '/comments/:id',
        exact: true,
        component: CommentContainer,

    },
    {
        path: '/blog',
        exact: true,
        component: Header,
    },
    {
        path: '/aboutUs',
        exact: true,
        component: Header,
    },
    {
        path: '/auth',
        exact: true,
        component: Header,
    },
]