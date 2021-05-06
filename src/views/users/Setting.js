import React from 'react';
import {
  CCard, CCardBody, CCardHeader, CCol, CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import usersData from './UsersData';

// eslint-disable-next-line react/prop-types
const User = ({ match }) => {
  // eslint-disable-next-line
  const user = usersData.find((u) => u.id.toString() === match.params.id);
  // eslint-disable-next-line
  const userDetails = user ? Object.entries(user): [['id', (<span><CIcon className="text-muted" name="cil-x-circle" />Not found</span>)]];
  // eslint-disable-next-line
  return (
    <CRow>
      <CCol lg={12}>
        <CCard>
          <CCardHeader>
            User id:
            {' '}
            {/* eslint-disable-next-line react/prop-types */}
            {match.params.id}
          </CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {
                  userDetails.map(([key, value], index) => (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td><strong>{value}</strong></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;
