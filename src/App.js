import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {
    const { onFetchClients } = this.props;
    onFetchClients();
  }

  render() {
    return <div />;
  }
}

const mapDispatchToProps = dispatch => ({
  onFetchClients: () => dispatch(actions.fetchClients()),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
