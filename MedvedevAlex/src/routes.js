import PageMain from "components/PageMain";
import PageComments from "components/PageComments";
import PageTopBloggers from "components/PageTopBloggers";
import CommentContainer from "containers/CommentContainer";

export default [
  {
    path: '/',
    exact: true,
    component: PageMain,
  },
  {
    path: '/comments',
    exact: true,
    component: PageComments,
  },
  {
    path: '/rating',
    exact: true,
    component: PageTopBloggers,
  },
  {
    path: '/comments/:id',
    exact: true,
    component: CommentContainer,
  },
]