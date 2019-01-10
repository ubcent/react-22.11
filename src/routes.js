import Counter from 'components/Counter';
import CommentsList from 'containers/CommentsListContainer';
import Comment from 'containers/CommentContainer';

export default [
  {
    path: '/',
    exact: true,
    component: Counter,
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsList,
  },
  {
    path: '/comments/:id',
    exact: true,
    component: Comment,
  },
]