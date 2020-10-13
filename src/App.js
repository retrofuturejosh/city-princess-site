import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import StreamingLinks from './components/StreamingLinks'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={getSongFromQueryString}>
        </Route>
      </Switch>
    </Router>
  );
}

const validSongLinkParams = ['strangers'];

function getSongFromQueryString(props) {
  const song = new URLSearchParams(props.location.search).get('songLink')
  if (validSongLinkParams.includes(song)) {
    return (<StreamingLinks {...props} song={song} />)
  } else {
    return (<Home />)
  }
}


export default App;
