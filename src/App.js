import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PageNotFound from './core/PageNotFound';
import Login from './core/auth/Login';
import Register from './core/auth/Register';
import BlankPage from './features/blank/BlankPage';
import ClassEdit from './features/classes/ClassEdit';
import ClassesCreate from './features/classes/ClassesCreate';
import ClassesList from './features/classes/ClassesList';
import Dashboard from './features/dashboard/Dashboard';
import { RouteConstants } from './shared/constants/RouteConstants';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteConstants.LOGIN} element={<Login />} />
          <Route path={RouteConstants.REGISTER} element={<Register />} />
          <Route path={RouteConstants.DASHBOARD} element={<Dashboard />} />
          <Route path={RouteConstants.CLASSES_LIST} element={<ClassesList />} />
          <Route path={RouteConstants.CLASSES_CREATE} element={<ClassesCreate />} />
          <Route path={RouteConstants.CLASS_EDIT+':classId'} element={<ClassEdit />} />
          <Route path={RouteConstants.BLANK} element={<BlankPage />} />
          <Route path={RouteConstants.NOT_FOUND} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
