import MoviesList from '../components/MoviesList';
import ComingSoon from '../components/ComingSoon';
import MovieDesc from '../components/MovieDesc';

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
    {
        id: 3,
        path: '/movie',
        component: MovieDesc,
    },
];
export default routes;

