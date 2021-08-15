import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import Tiles from '../Tiles/Tiles';
import ProfileContent from '../ProfileContent/ProfileContent';

const Body = () => (
  <div className={styles.Body}>
      <div className={styles.BodyContent}>
        <div className={styles.section2}>
          <Tiles><ProfileContent></ProfileContent></Tiles>
          <Tiles><div className={styles.middleBar}></div></Tiles>
          </div>
        <div className={styles.section3}><Tiles><div className={styles.rightBar}></div></Tiles></div>
      </div>
  </div>
);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
