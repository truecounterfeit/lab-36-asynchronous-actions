
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import WizardList from './WizardList';


class WizardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      searchFormLimit: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
    e.preventDefault();


    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let searchFormLimit = this.state.searchFormLimit;
    let searchText = this.state.searchText;
    this.props.getResults(searchText, searchFormLimit);
  }


  render() {

    return (
      <div className = 'form'>
        <form onSubmit = {this.handleSubmit}>

        <input
        type= 'text'
        name= 'searchText'
        placeholder = 'Enter search'
        onChange = {this.handleChange} />

        <input
        type = 'number'
        name = 'searchFormLimit'
        placeholder = '# of results'
        onChange = {this.handleChange} />

        <button type = 'submit'> Submit </button>
        </form>

      </div>
    )
  }

}

export default SearchForm;
