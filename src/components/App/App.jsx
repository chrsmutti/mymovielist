import { fetchMovies } from "../../services/tmdb";
import LinearProgress from "@material-ui/core/LinearProgress";
import MovieGrid from "../MovieGrid/MovieGrid";
import NavigationBar from "../NavigationBar/NavigationBar";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      err: "",
      searching: false,
    };
  }

  render() {
    return (
      <div className="App">
        <NavigationBar search={e => this.handleQueryChange(e)} />
        <LinearProgress hidden={!this.state.searching} variant="query" />

        <MovieGrid movies={this.state.results} />
      </div>
    );
  }

  /**
   * Handle query changed.
   *
   * @param {InputEvent} event Input changed event.
   * @memberof App
   */
  async handleQueryChange(event) {
    this.setState({ searching: true });
    const results = await fetchMovies(event.target.value);
    this.setState({ results, searching: false });
  }
}

export default App;
