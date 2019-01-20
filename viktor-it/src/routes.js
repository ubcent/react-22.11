import Layout from 'components/Layout';
import AboutPage from 'components/AboutPage';
import NewsPage from 'components/NewsPage';
import VideoPage from 'components/VideoPage';
import ContactsPage from 'components/ContactsPage';

export default [
  {
    path: '/',
    exact: true,
    component: Layout,
  },
  {
    path: '/AboutPage',
    exact: true,
    component: AboutPage,
  },
  {
    path: '/NewsPage',
    exact: true,
    component: NewsPage,
  },
  {
    path: '/VideoPage',
    exact: true,
    component: VideoPage,
  },
  {
    path: '/ContactsPage',
    exact: true,
    component: ContactsPage,
  },
]