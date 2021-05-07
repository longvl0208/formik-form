import React, { useState, useEffect } from 'react';
import {
  CCol, CRow, CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useDropzone } from 'react-dropzone';
import CloudIcon from 'src/assets/icons/upload-data-to-cloud.svg';
import { Formik, Field, Form } from 'formik';

import usersData from './UsersData';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

// eslint-disable-next-line react/prop-types
const User = ({ match }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
    },
  });

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  // eslint-disable-next-line
  const user = usersData.find((u) => u.id.toString() === match.params.id);
  // eslint-disable-next-line
  const userDetails = user ? Object.entries(user): [['id', (<span><CIcon className="text-muted" name="cil-x-circle" />Not found</span>)]];
  // eslint-disable-next-line
  return (
    <CRow>
      <CCol className="ml-86" lg={12}>
        <h1 className="primary-1">Your Profile</h1>
      </CCol>
      <CCol className="ml-86" lg={12}>
        <section className="thm-setting-container">
          <CRow className="mb-4">
            <div
              style={{
                backgroundImage: files[0] ? `url(${files[0].preview})` : '', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center',
              }}
              {...getRootProps({ className: 'dropzone' })}
            >
              <div>
                <img src={CloudIcon} alt="upload-icon" width={100} height={100} />
              </div>
              <input {...getInputProps()} />
              <p className="upload-desc">Drag and drop some files here or</p>
              <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                <CButton className="thm-upload-btn" color="info" type="button" onClick={open}>
                  Choose file
                </CButton>
              </CCol>
            </div>
          </CRow>
          <CCol lg={12}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
              }}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              <Form>
                <CRow>
                  <CCol className="thm-flex-column" lg={6}>
                    <Field id="firstName" name="firstName" placeholder="Jane" />
                    <Field id="lastName" name="lastName" placeholder="Doe" />
                  </CCol>
                  <CCol className="thm-flex-column" lg={6}>
                    <Field id="firstName" name="firstName" placeholder="Jane" />
                    <Field
                      id="email"
                      name="email"
                      placeholder="jane@acme.com"
                      type="email"
                    />
                  </CCol>
                  <CCol className="thm-flex-column" lg={12}>
                    <button type="submit">Save</button>
                  </CCol>
                </CRow>
              </Form>
            </Formik>
          </CCol>
        </section>
      </CCol>
    </CRow>
  );
};

export default User;
