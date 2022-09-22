import { Navigate, useRoutes } from 'react-router-dom';
import Signin from './modules/auth/pages/Signin'
import Signup from './modules/auth/pages/Signup'
import Dashboard from './modules/Dashboard/pages/Dashboard'
import CVForm from './modules/CV/pages/CVForm'
import WorkerLayout from './modules/common/components/WorkerLayout'

// ----------------------------------------------------------------------

export default function Router() {
//   let newAccess_Token = null;
//   newAccess_Token = localStorage.getItem('access_token');
//   console.log("SSSSSSSSSSSSSSSSSSSS",newAccess_Token)
  return useRoutes([
    {
      path: '/signup',
      element: <Signup />,
      
    },
    {
      path: '/cv',
      element: <WorkerLayout />,
      // element: <User />,
      children: [
        { path: '', element: <CVForm /> },
      ],
    },
    {
      path: '/',
      element: <Signin />,
      
    },
    // {
    //   path: '/cv',
    //   element: <CVForm />,
      
    // },
    { path: '/recruiter', element: <Dashboard /> },
  ]);
}