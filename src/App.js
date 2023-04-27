import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TeacherLayout from './layouts/TeacherLayout';
import Courses from './components/Teacher/Courses';
import Login from './components/Common/Login';
import CoursePoints from './components/Teacher/CoursePoints';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin'>

          </Route>
          <Route path='/teacher' element={<TeacherLayout />}>
            <Route path='courses' element={<Courses />} />
            <Route path='mark' element={<CoursePoints />}/>
          </Route>
          <Route path='/student'>
          {/* /courses/2/lessons */}

          </Route>
          <Route path='*' element={<h1>404</h1>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
