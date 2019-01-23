import React,  {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as applicationActions from '../../actions/applicationActions';

class  ApplicationsPage extends React.Component{

  constructor(props, context) {
    super(props, context);

    this.state = {
      application : {title:"" }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const application = this.state.application;
    application.title = event.target.value;
    this.setState({application: application});
  }

  onClickSave() {
    this.props.actions.createApplication(this.state.application);
  }

  applicationRow(application, index){
    return <div key={index}>{application.title}</div>;
  }


  render(){
    return (
      <div>
        <h1>Applications</h1>
        {this.props.applications.map(this.applicationRow)}
        <h2>Add Application</h2>
        <input type="text"
               onChange={this.onTitleChange}
               value={this.state.application.title} />

        <input type="submit"
               value="Save"
               onClick={this.onClickSave} />
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


