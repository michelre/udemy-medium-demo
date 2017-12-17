import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    return <div>
      <h1>Hello, World!</h1>
      <p>Hello Body</p>
      <i className="fa fa-search" />
    </div>
  }
}

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps)(App);

