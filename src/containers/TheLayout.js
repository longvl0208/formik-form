import React from 'react';
// eslint-disable-next-line import/no-cycle
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader,
} from './index';

const TheLayout = () => (
  <div className="c-app c-default-layout">
    <TheSidebar />
    <div className="c-wrapper">
      <TheHeader />
      <div className="c-body">
        <TheContent />
      </div>
      <TheFooter />
    </div>
  </div>
);

export default TheLayout;
