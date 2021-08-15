import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tiles.module.css';

const Tiles = (props) => {
  console.log('props',props);
  return (
    <div className={styles.Tiles}>
      {props.children}
    </div>
  );
  
}

Tiles.propTypes = {};

Tiles.defaultProps = {};

export default Tiles;
