import MoviesList from '../components/MoviesList/MoviesList';
import ComingSoon from '../components/ComingSoon/ComingSoon';

const routes = [
    {
        exact: true,
        id: 1,
        path: '/',
        component: MoviesList,
    },
    {
        id: 2,
        path: '/soon',
        component: ComingSoon,
    },
];
export default routes;

