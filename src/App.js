import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <div className="App">
       <Router>
        <nav>
          <ul>
            <li>
              <Link to='/posts'>Posts</Link>
            </li>
            <li>
              <Link to='/add'>Add</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts/:id'>
            <SinglePost />
          </Route>
          <Route exact path='/add'>
            <AddPost/>
          </Route>
          <Route exact path='/'>
            <AppPosts />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
