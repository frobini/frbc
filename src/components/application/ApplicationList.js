import React, {PropTypes} from 'react';
import ApplicationListRow from './ApplicationListRow';

const ApplicationList = ({applications}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      {applications.map(application =>
        <ApplicationListRow key={application.id} application={application}/>
      )}
      </tbody>
    </table>
  );
};

ApplicationList.propTypes = {
  applications: PropTypes.array.isRequired
};

export default ApplicationList;
