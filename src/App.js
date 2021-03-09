import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Chapter from './components/Chapter/Chapter';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import Subject from './components/Subject/Subject';
import Topic from './components/Topic/Topic';
import TopicsSideBar from './components/TopicsSideBar/TopicsSideBar';

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path="/">
                      <SideBar />
                      <Home />
                  </Route>
                  <Route exact path="/:subjectName">
                      <SideBar />
                      <Subject />
                  </Route>
                  <Route exact path="/:subjectName/:chapterName">
                      <TopicsSideBar />
                      <Chapter />
                  </Route>
                  <Route exact path="/:subjectName/:chapterName/:topicName">
                      <TopicsSideBar />
                      <Topic />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
