import React,  {PropTypes} from 'react';

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
    alert(`Saving ${this.state.application.title}`);
  }

  render(){
    return (
      <div>
        <h1>Applications</h1>
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

export default ApplicationsPage;


