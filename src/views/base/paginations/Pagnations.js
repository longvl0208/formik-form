import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination,
} from '@coreui/react';
// eslint-disable-next-line import/no-unresolved
import { DocsLink } from 'src/reusable';

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <>
      <CCard>
        <CCardHeader>
          Pagination
          <DocsLink name="CPagination" />
        </CCardHeader>
        <CCardBody>
          <h6>Default</h6>
          <CPagination
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br />

          <h6>Small</h6>
          <CPagination
            size="sm"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br />

          <div className="d-md-down-none">
            <h6>Large</h6>
            <CPagination
              size="lg"
              activePage={currentPage}
              pages={10}
              onActivePageChange={setCurrentPage}
            />
            <br />
          </div>

          <div>
            currentPage:
            {currentPage}
          </div>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <strong> Pagination </strong>
          <small>alignment</small>
        </CCardHeader>
        <CCardBody>
          <h6>Left alignment (default)</h6>
          <CPagination
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br />

          <h6>Center alignment</h6>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br />

          <h6>Right (end) alignment</h6>
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
          <br />

          <div>
            currentPage:
            {currentPage}
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Paginations;