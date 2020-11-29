import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from 'app/Navbar';
import JobPage from "features/jobs/JobPage";
import JobList from "features/jobs/JobList";
import HomePage from "app/HomePage";

const App = (): JSX.Element => {
  return (
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/jobs" component={JobList} />
      <Route exact path="/jobs/:jobId" component={JobPage}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;