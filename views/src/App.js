import './App.scss';
import {Route} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Layout from './hoc/Layout/Layout';
import Course from './containers/Course/Course';
import Class from './containers/Class/Class';


const App = () => {
  return (
    <Layout>
      <Route path='/' exact component={Courses}/>
      <Route path='/course/id' exact component={Course}/>
      <Route path='/class/id' exact component={Class}/>
    </Layout>
  )
}

export default App;
