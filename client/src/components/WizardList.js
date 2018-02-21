
import React from 'react';
import ReactDom from 'react-dom';

import WizardForm from './WizardForm';

class WizardList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props.posts);
    return (
      <div className = 'list'>
        <ul>
          { this.props.posts ? this.props.posts.map((listItem, i) =>
              <li key = {i}>
              <a href = {listItem.data.url}>
              <h5> {listItem.data.title} </h5>
              <p> {listItem.data.ups} </p>
              </a>
              </li>
            ): null}
        </ul>
      </div>
    )
  }
}


export default SearchResultList;
