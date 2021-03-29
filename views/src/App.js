import './App.scss';
import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Courses from './containers/Courses/Courses';
import Layout from './hoc/Layout/Layout';
import Course from './containers/Course/Course';
import Class from './containers/Class/Class';
import AddCourse from './containers/User/AddCourse/AddCourse';
import AddClass from './containers/User/AddClass/AddClass';
import Login from './containers/Auth/Login/Login';
import Signup from './containers/Auth/Signup/Signup';
import {loadUser, logout} from './redux/actions/auth';
import setAuthToken from './utils/setAuthToken';

const App = (props) => {
  const {isAuth, user} = props;
  //CHECK FOR TOKEN IN LOCAL STORAGE
  useEffect(() => {
    if(localStorage.token) {
      setAuthToken(localStorage.token);
    }
    props.loadUser();

    //LOG USER OUT FROM ALL TABS IF THEY LOGOUT FROM ONE
    window.addEventListener('storage', () => {
      if (!localStorage.token) {
        props.logout();
      }
    })
  }, []);

  return (
    <Layout>
      <Route path='/' exact component={Courses}/>
      <Route path='/curso/:id' exact component={Course}/>
      <Route path='/aula/:id' exact component={Class}/>
      <Route path='/user/novo-curso' exact component={AddCourse}/>
      <Route path='/user/nova-aula/:id' exact component={AddClass}/>
      <Route path='/user/cursos' exact component={Courses}/>
      <Route path='/auth/login' exact component={Login} />
      <Route path='/auth/registro' exact component={Signup} />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isAuth: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => dispatch(loadUser),
    logout: () => dispatch(logout)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
