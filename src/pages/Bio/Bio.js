import React from 'react';

import bioData from '../../data/bio';
import classes from './Bio.module.css';

const Bio = (props) => (
  <div className={classes.Bio}>
    <span className={classes.BioPhoto}>
      <img src={bioData.photo} alt="me"></img>
    </span>
    <p className={classes.BioLinks}>
      {Object.keys(bioData.links).map((linkName, idx) => (
        <span key={linkName}>
          <a href={bioData.links[linkName]}>{linkName}</a>
          {idx < Object.keys(bioData.links).length - 1 ? ' || ' : null}
        </span>
      ))}
    </p>
    <div className={classes.BioText}>
      {bioData.paragraphs.map((paragraph, idx) => (
        <p key={idx}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export default Bio;
