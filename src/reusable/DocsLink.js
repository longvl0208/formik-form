import React from 'react';
import { CLink } from '@coreui/react';

const DocsLink = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    name,
    // eslint-disable-next-line react/prop-types
    text,
    ...rest
  } = props;

  // eslint-disable-next-line react/prop-types,react/destructuring-assignment
  const href = name ? `https://coreui.io/react/docs/components/${name}` : props.href;

  return (
    <div className="card-header-actions">
      <CLink
        {...rest}
        href={href}
        rel="noreferrer noopener"
        target="_blank"
        className="card-header-action"
      >
        <small className="text-muted">{ text || 'docs' }</small>
      </CLink>
    </div>
  );
};

export default React.memo(DocsLink);
