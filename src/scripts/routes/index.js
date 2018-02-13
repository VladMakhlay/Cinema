import MoviesList from '../components/MoviesList';
import ComingSoon from '../components/ComingSoon';
import MovieDesc from '../components/MovieDesc';
import Welcome from '../components/Welcome';
import Hall from '../components/Hall/index';

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
    {
        id: 5,
        path: '/hall',
        component: Hall,
    },
];
export default routes;

