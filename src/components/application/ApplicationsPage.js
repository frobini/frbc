import React,  {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';
import ApplicationList from './ApplicationList';

class  ApplicationsPage extends React.Component{

  constructor(props, context) {
    super(props, context);
  }

  render(){
    const {applications} = this.props;

    return (
      <div>
        <h1>Applications</h1>
        <ApplicationList applications = {applications} />
      </div>
    );
  }


}

ApplicationsPage.propTypes = {
  applications: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    applications: state.applications
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(applicationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsPage);


