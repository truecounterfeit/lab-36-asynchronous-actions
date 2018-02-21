import React from 'react';
import {Route} from 'react-router-dom'
import WizardForm from './WizardForm';
import WizardList from './WizardList';

// import components ex: import Header from './header'


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: null,

    }

    this.getResults = this.getResults.bind(this);
  }

  getResults(searchText, searchFormLimit) {

    superagent.get(`https://www.reddit.com/r/${searchText}' Wizard'.json?limit=${searchFormLimit}`)


    .then(res => {

      this.setState({
      posts: res.body.data.children,

      });
      console.log('Haza! We found the Wizard!');
    })

    .catch(err => {

      this.setState({
        searchErrorMessage: `Unable to find Wizard`
      })
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Wizard Search</h1>
        </header>
        <section>
          <SearchForm
          getResults={this.getResults} />
          <SearchResultList posts={this.state.posts} />
        </section>
        <footer>
          <h6>Lab36</h6>
        </footer>
      </React.Fragment>
    )
  }
}

export default App;
