import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import debounce from "awesome-debounce-promise";
import TMDB from "../../config/tmdb";
import NavigationBar from "../NavigationBar/NavigationBar";
import MovieGrid from "../MovieGrid/MovieGrid";

const search = query =>
  fetch(`${TMDB.api_url}?api_key=${TMDB.api_key}&query=${query}`);
const searchDebounced = debounce(search, 1000);

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
        <NavigationBar
          classes={{}}
          search={e => this.handleQueryChange(e.target.value)}
        />
        <LinearProgress hidden={!this.state.searching} variant="query" />

        <MovieGrid classes={{}} movies={this.state.results} />
      </div>
    );
  }

  async handleQueryChange(query) {
    if (!query || query.length === 0) {
      this.setState({ results: [] });
      return;
    }

    this.setState({ searching: true });
    const response = await searchDebounced(query);

    const body = await response.json();
    if (response.ok) {
      this.setState({ results: body.results });
    } else {
      this.setState({
        err: `Unable to connect to API.\n${body["status_message"]}`,
      });
    }

    this.setState({ searching: false });
  }
}

export default App;
