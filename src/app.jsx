import { lazy } from 'react';
import { v4 as uuidv } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { appRoutes } from './routes/config';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import DashboardLayout from './layouts/dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
const LoginPage = lazy(() => import('./pages/login'));
const Page404 = lazy(() => import('./pages/page-not-found'));

// --------------------------------------------------------

export default function App() {
  useScrollToTop();
  const userInfo = sessionStorage.getItem('userInfo');
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {userInfo !== null
            ? appRoutes?.map(route => (
              <Route
                key={uuidv()}
                path={route.path}
                element={<ProtectedRoute>{route.element}</ProtectedRoute>}
              />
            ))
            : null}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </>
  );
}
