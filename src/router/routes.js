import * as PATHS from './paths';
// pages
import { Dashboard } from '../pages';

export const ROUTES = [
  {
    element: <div>Login</div>,
    exact: true,
    path: PATHS.LOGIN_PATH,
  },
  {
    element: <Dashboard />,
    path: PATHS.DASHBOARD_PATH,
    exact: true,
  },
];
