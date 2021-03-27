import './App.scss';
import {Route} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Layout from './hoc/Layout/Layout';
import Course from './containers/Course/Course';

const App = () => {
  return (
    <Layout>
      <Route path='/' exact component={Courses}/>
      <Route path='/course/id' exact component={Course}/>
    </Layout>
  )
}

export default App;
