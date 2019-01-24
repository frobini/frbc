import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';

class ManageApplicationPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Application</h1>
    );
  }
}


ManageApplicationPage.propTypes = {
};


function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageApplicationPage);
