import React from 'react';
import PropTypes from 'utils/propTypes';

import bn from 'utils/bemnames';

const bem = bn.create('page');

const Page = ({
  tag: Tag,
  className,
  children,
  ...restProps
}) => {
  const classes = bem.b('px-3', className);

  return (
    <Tag className={classes} {...restProps}>
      {children}
    </Tag>
  );
};

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  tag: 'div',
};

export default Page;
