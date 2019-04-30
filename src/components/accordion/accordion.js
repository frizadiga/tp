import React, { useState } from 'react';
import { PropTypes as T } from 'prop-types';
import { FontAwesomeIcon as FAS } from '@fortawesome/react-fontawesome';
import './accordion.scss';

const Accordion = (props) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const handleClick = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="accordion">
      <div
        onClick={handleClick}
        className={`header ${isCollapse ? '' : 'header--open'}`}
      >
        {props.header}
        <FAS
          style={{ float: 'right' }}
          icon={`${isCollapse ? 'chevron-right' : 'chevron-down'}`}
        />
      </div>
      {!isCollapse && <div className="content">{props.content}</div>}
    </div>
  );
};

Accordion.propTypes = {
  header: T.string.isRequired,
  content: T.string.isRequired,
};

export default Accordion;
