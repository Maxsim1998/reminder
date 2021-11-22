import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';

const RouterGenerator = () => (
  <Router>
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          exact={route.exact}
        />
      ))}
    </Routes>
  </Router>
);

export default RouterGenerator;
