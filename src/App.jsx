import React, { Component } from "react";
import debounce from "awesome-debounce-promise";
import tmdb from "./tmdb";
import NavigationBar from "./NavigationBar";
import MovieGrid from "./MovieGrid";

import "./App.css";

const search = query => fetch(`https://api.themoviedb.org/3/search/movie?api_key=${tmdb.api_key}&query=${query}`);
const searchDebounced = debounce(search, 1000);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      err: "",
    };
  }

  render() {
    return (
      <div className="App">
        <NavigationBar classes={{}} search={e => this.handleQueryChange(e.target.value)} />

        <MovieGrid classes={{}} movies={this.state.results} />
      </div>
    );
  }

  async handleQueryChange(query) {
    if (!query || query.length === 0) {
      this.setState({ results: [] });
      return;
    }

    const response = await searchDebounced(query);

    const body = await response.json();
    if (response.ok) {
      this.setState({ results: body.results });
    } else {
      this.setState({ err: `Unable to connect to API.\n${body["status_message"]}` });
      console.err(body);
    }
  }
}

export default App;
