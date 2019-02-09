import { service as TMDBService } from "../../services/tmdb";
import MovieGrid from "../MovieGrid/MovieGrid";
import NavigationBar from "../NavigationBar/NavigationBar";
import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./App.theme";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { hasNext: true, results: [] };
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <NavigationBar search={q => this.handleQueryChange(q)} />
          <MovieGrid
            movies={this.state.results}
            hasNext={this.state.hasNext}
            onLoadMore={() => this.handleNextPage()}
          />
        </MuiThemeProvider>
      </div>
    );
  }

  /**
   * Handle query changed.
   *
   * @param {string} query Query.
   * @memberof App
   */
  async handleQueryChange(query) {
    this.setState({ query, page: 1 });
    const { results, hasNext } = await TMDBService.fetchMovies(query, 1);
    this.setState({ hasNext, results });
  }

  /**
   * Handle next page request.
   *
   * @memberof App
   */
  async handleNextPage() {
    const { query, page } = this.state;
    this.setState({ page: page + 1 });
    const { results, hasNext } = await TMDBService.fetchMovies(query, page + 1);
    this.setState({ hasNext, results: this.state.results.concat(results) });
  }
}

export default App;
