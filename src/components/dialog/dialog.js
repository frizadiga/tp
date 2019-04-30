// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes as T } from 'prop-types';
import { FontAwesomeIcon as FAS } from '@fortawesome/react-fontawesome';
import usePortal from '../../custom-hooks/use-portal';
import Button from '../button';
import './dialog.scss';

const Dialog = (props) => {
  // const el = document.createElement('div');
  if (!props.isShow) return null;

  const target = usePortal(props.id);

  return ReactDOM.createPortal(
    <div className={props.className} style={props.style}>
      <div className="inner">
        <Button
          onClick={props.handleClose}
          style={{
            fontSize: 22,
            position: 'absolute',
            right: 12,
            top: 6,
            padding: 0,
            color: '#4a4a4a',
          }}
        >
          <FAS icon="times" />
        </Button>
        <div className="body">
          {props.children}
        </div>
      </div>
    </div>,
    target,
  );
};

Dialog.propTypes = {
  children: T.oneOfType([T.arrayOf(T.node), T.node]),
  style: T.object,
  className: T.string,
  isShow: T.bool,
  handleClose: () => null,
};

Dialog.defaultProps = {
  children: 'Button Children',
  style: {},
  className: 'dialog',
  isShow: false,
  handleClose: () => null,
};

export default Dialog;
