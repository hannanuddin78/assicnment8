import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostContainer from './components/PostContainer/PostContainer';
import Post from './components/Post/Post';

function App() {
  return (
    <div>
        <React.Fragment>
          <CssBaseline />
            <Container fixed>
              <Router>
                <Switch>
                  <Route exact path="/">
                    <PostContainer></PostContainer>
                  </Route>
                  <Route path="/post/:id">
                    <Post></Post>
                  </Route>
                </Switch>
              </Router>
            </Container>
        </React.Fragment>
    </div>
  );
}

export default App;
