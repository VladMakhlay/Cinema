import MoviesList from '../components/MoviesList';
import ComingSoon from '../components/ComingSoon';
import MovieDesc from '../components/MovieDesc';
import Welcome from '../components/Welcome';
import Hall from '../components/Hall';
import Login from '../components/Login';
import Logout from '../components/Logout';
import Signup from '../components/Signup';

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
    {
        id: 6,
        path: '/login',
        component: Login,
    },
    {
        id: 7,
        path: '/signup',
        component: Signup,
    },
    {
        id: 8,
        path: '/logout',
        component: Logout,
    },
];
export default routes;

