import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import AuthGuard from 'src/views/authentication/auth/AuthGuard';
import Queries from 'src/views/Queries';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const Users = Loadable(lazy(() => import('../views/users/Users')));
const AuthorizedServicePartner = Loadable(lazy(() => import('../views/Bookings')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const Facilities = Loadable(lazy(() => import('../views/Facilities')));
const AddFacility = Loadable(lazy(() => import('../views/Facilities/AddFacilityPage')));
const Exercise = Loadable(lazy(() => import('../views/Exercises')));
const AddExercisePage = Loadable(lazy(() => import('../views/Exercises/AddExcercisePage')));

const Router = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <FullLayout />
      </AuthGuard>
    ),
    children: [
      { path: '/', element: <Navigate to="/users" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/users', exact: true, element: <Users /> },
      { path: '/facilities', exact: true, element: <Facilities /> },
      { path: '/facilities/add', element: <AddFacility /> },
      { path: '/facilities/:id', element: <AddFacility /> },
      { path: '/bookings', exact: true, element: <AuthorizedServicePartner /> },
      { path: '/exercises', exact: true, element: <Exercise /> },
      { path: '/exercises/add', element: <AddExercisePage /> },
      { path: '/exercises/:id', element: <AddExercisePage /> },
      { path: '/queries', exact: true, element: <Queries /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
    ],
  },
  { path: '*', element: <Error /> },
];

export default Router;
