import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoundPicture.module.css';

const RoundPicture = (props) => {
  return(
  <div className={styles.RoundPicture}>
    {props.children}
  </div>
)};

RoundPicture.propTypes = {};

RoundPicture.defaultProps = {};

export default RoundPicture;
