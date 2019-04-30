import React from 'react';
import { PropTypes as T } from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import './button.scss';

const Button = (props) => {
  const { type, style, children, href, to, className, onClick, disabled } = props;

  const handleClick = () => {
    if (!to) return onClick();
    return props.history.push(to);
  };

  return (
    <button
      type={type}
      style={style}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {
        href && <a href={href}>{children}</a>
      }
      {
        to && <Link to={to}>{children}</Link>
      }
      {
        (!to && !href) && children
      }
    </button>
  );
};

Button.propTypes = {
  children: T.oneOfType([T.arrayOf(T.node), T.node]),
  style: T.object,
  href: T.string,
  to: T.string,
  type: T.string,
  className: T.string,
  onClick: T.func,
  history: T.object.isRequired,
  disabled: T.bool,
};

Button.defaultProps = {
  children: 'Button Children',
  style: {},
  href: '',
  to: '',
  type: 'button',
  className: '',
  onClick: () => null,
  disabled: false,
};

export default withRouter(Button);
