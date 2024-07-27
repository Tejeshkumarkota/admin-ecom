import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BlankPage from './features/BlankPage';
import ClassesCreate from './features/ClassesCreate';
import ClassesList from './features/ClassesList';
import Dashboard from './features/Dashboard';
import PageNotFound from './features/PageNotFound';
import Login from './features/Login';
import ClassEdit from './features/ClassEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classes-list" element={<ClassesList />} />
          <Route path="/classes-list/create" element={<ClassesCreate />} />
          <Route path="/class/edit/:id" element={<ClassEdit />} />
          <Route path="/blank-page" element={<BlankPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
