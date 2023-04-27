import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TeacherLayout from './layouts/TeacherLayout';
import Courses from './components/Teacher/Courses';
import Login from './components/Common/Login';
import LoginForm from './components/Common/LoginForm';
import RegisterForm from './components/Common/RegisterForm';
import CoursePoints from './components/Teacher/CoursePoints';
import ForgetPassForm from './components/Common/ForgetPassForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/forget-pass' element={<ForgetPassForm />} />
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
