import MoviesList from '../components/MoviesList/MoviesList';
import ComingSoon from '../components/ComingSoon/ComingSoon';
import MovieDesc from '../components/MovieDesc/MovieDesc';

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

