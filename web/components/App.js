import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    console.log(this.props);
    return <h1>Hello, World!</h1>
  }
}

const mapStateToProps = (state) => ({ articles: state.articles });

export default connect(mapStateToProps)(App);

