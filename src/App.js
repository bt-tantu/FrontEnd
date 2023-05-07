import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SecondLayout from './layouts/SecondLayout';
import Courses from './components/Teacher/Courses';
import LoginForm from './components/Common/LoginForm';
import RegisterForm from './components/Common/RegisterForm';
import CoursePoints from './components/Teacher/CoursePoints';
import ForgetPassForm from './components/Common/ForgetPassForm';
import DefaultLayout from './layouts/DefaultLayout';
import HeaderTeacher from './layouts/Teacher/HeaderTeacher';
import Page404 from './views/Page404';
import ChatRoom from './components/Common/ChatRoom';
import Classes from './components/Teacher/Classes';
import { createContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useReducer } from 'react';
import userReducer from './reducers/UserReducer';
import { UserContext } from './configs/MyContext';
import ListForum from './layouts/ListForum';
import ForumDetail from './layouts/ForumDetail';
import moment from 'moment';
import CreateForum from './layouts/Common/CreateForum';
import FluidLayout from './layouts/FluidLayout';
import SearchStudent from './components/Teacher/SearchStudent';
moment().local()

function App() {
  const [user, dispatch] = useReducer(userReducer || null)

  return (
    <UserContext.Provider value={[user, dispatch]}>
      <BrowserRouter>
        <HeaderTeacher />
        <Container>
          <Routes>
            <Route path='/' element={<SecondLayout />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/forget-pass' element={<ForgetPassForm />} />
            <Route path='/chat' element={<ChatRoom />} />
            <Route path='/teacher' element={<SecondLayout />} />
            <Route path='/teacher/forum' element={<ListForum />} />
            <Route path='/teacher/forum/create' element={<CreateForum />} />
            <Route path='/teacher/forum/:forumId' element={<ForumDetail />}/>
            <Route path='/teacher/:teacherId/courses' element={<Courses />} />
            <Route path='/courses/:courseId' element={<CoursePoints />} />
            <Route path='/teacher/student' element={<FluidLayout header={HeaderTeacher}><SearchStudent /></FluidLayout>} />
            {/* <Route path='/search' element={< />} /> */}
            {/* <Route path='/teacher/:teacherId/courses/:courseId' element={<CoursePoints />} /> */}
            <Route path='*' element={<Page404 />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </UserContext.Provider>
      
  );
}

export default App;
