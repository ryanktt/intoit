import './App.scss';
import {Route} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Layout from './hoc/Layout/Layout';
import Course from './containers/Course/Course';
import Class from './containers/Class/Class';
import AddCourse from './containers/User/AddCourse/AddCourse';
import AddClass from './containers/User/AddClass/AddClass';
import Login from './containers/Auth/Login/Login';
import Signup from './containers/Auth/Signup/Signup';


const App = () => {
  return (
    <Layout>
      <Route path='/' exact component={Courses}/>
      <Route path='/curso/id' exact component={Course}/>
      <Route path='/aula/id' exact component={Class}/>
      <Route path='/user/novo-curso' exact component={AddCourse}/>
      <Route path='/user/nova-aula' exact component={AddClass}/>
      <Route path='/auth/login' exact component={Login} />
      <Route path='/auth/signup' exact component={Signup} />
    </Layout>
  )
}

export default App;
