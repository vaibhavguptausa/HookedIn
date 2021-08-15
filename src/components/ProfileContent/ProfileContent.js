import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileContent.module.css';
import RoundPicture from '../RoundPicture/RoundPicture';
import logo from '../../logo.svg';
import ProfilePic from '../../profilepic.jpg';
import CoverPic from '../../coverpic2.jpg';
import BITSLogo from '../../BITS_Pilani-Logo.png';
import GirlPic from '../../girlPic.jpg';
import 'bootstrap/dist/css/bootstrap.css';
const ProfileContent = () => (
  <div className={styles.ProfileContent}>
    <div className={styles.ProfilePicture}>
    <RoundPicture><img height="150px" width="150px" src={ProfilePic}/></RoundPicture>
    </div>
    <div className={styles.BackGroundPicture}>
    <img height="200px" width="100%" src={CoverPic}/>
    </div>
    <div className={styles.Content}>
    <div className={styles.Section1}>
      <div className={styles.Name}>Vaibhav Gupta</div>
      
      <div className={styles.Desc}><span>26, Male, Straight</span>
    
      </div>
      <div >
        <span className={styles.Loc}>
        Gorakhpur, Uttar Pradesh, India
        </span>
        <span ><a className={styles.contactInfo}>Contact Info</a></span></div>
      <a className={styles.connections}>10000</a>
    </div>
    <div className={styles.Section2}>
    <div className={`${styles.InstitutesName} ${styles.flexContainer}`}><div className={styles.logo}><img className={styles.roundImage} src={GirlPic}/></div><div>Debasmita R Singha</div></div>
      <div className={`${styles.InstitutesName} ${styles.flexContainer}`}><div className={styles.logo}><img className={styles.roundImage}  src={GirlPic}/></div><div>Pooja Maurya</div></div>
    </div>
    </div>
    <div className={`${styles.InteractionSection}`}>
    <button className={`${styles.button}`}>Message</button>
    </div>
  </div>
);

ProfileContent.propTypes = {};

ProfileContent.defaultProps = {};

export default ProfileContent;
