import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ApplicationListRow = ({application}) => {
  return (
    <tr>
      <td><Link to={'/application/' + application.id}>{application.title}</Link></td>
    </tr>
  );
};

ApplicationListRow.propTypes = {
  application: PropTypes.object.isRequired
};

export default ApplicationListRow;
