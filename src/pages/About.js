import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p style={styles.margin}>Web app for searching breweries in the US. </p>
      <p style={styles.margin}>
        Built with React JS and the{' '}
        <a href='https://www.openbrewerydb.org/'>Open Brewery DB API</a>
      </p>
      <p style={styles.margin}>
        Shoutout to{' '}
        <a href='https://www.youtube.com/user/TechGuyWeb'>Traversy Media</a>
      </p>
      <CardActions style={styles.social}>
        <IconButton
          color='inherit'
          href='https://github.com/gpadmaku1/'
          target='_blank'
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          color='inherit'
          href='https://linkedin.com/in/gpadmaku'
          target='_blank'
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color='inherit'
          href='https://twitter.com/gpadmaku'
          target='_blank'
        >
          <TwitterIcon />
        </IconButton>
      </CardActions>
    </div>
  );
};

const styles = {
  margin: {
    marginTop: '20px',
  },
  social: {
    marginTop: '10px',
    marginLeft: '-15px',
  },
};

export default About;
