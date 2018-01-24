import MoviesList from '../components/MoviesList';
import ComingSoon from '../components/ComingSoon';
import MovieDesc from '../components/MovieDesc';
import Welcome from '../components/Welcome/index';

const routes = [
    {
        exact: true,
        id: 1,
        path: '/',
        component: Welcome,
    },
    {
        id: 2,
        path: '/today',
        component: MoviesList,
    },
    {
        id: 3,
        path: '/soon',
        component: ComingSoon,
    },
    {
        id: 4,
        path: '/movie/:id',
        component: MovieDesc,
    },
];
export default routes;

