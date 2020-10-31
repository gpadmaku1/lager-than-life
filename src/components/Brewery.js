import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import DirectionsIcon from '@material-ui/icons/Directions';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';

const Brewery = ({
  brewery: {
    name,
    website_url,
    city,
    state,
    latitude,
    longitude,
    street,
    phone,
  },
}) => {
  const classes = useStyles();

  const getFormattedPhoneNumber = (phone) => {
    var cleaned = ('' + phone).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  };

  const handleDirections = (latitude, longitude) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  const handleWebsite = () => {
    window.open(website_url, '_blank');
  };

  const handlePhone = (phone) => {
    const telephoneNumber = getFormattedPhoneNumber(phone);
    const url = 'tel:' + telephoneNumber;
    window.open(url, '_blank');
  };

  return (
    <Card className={classes.breweryContainer} variant='outlined'>
      <CardContent>
        <Typography noWrap variant='h6'>
          {name}
        </Typography>
        {street && (
          <Typography noWrap className={classes.cardContent}>
            {street}
          </Typography>
        )}
        {city && (
          <Typography noWrap className={classes.cardContent}>
            {city}, {state}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {website_url && (
          <IconButton title='Website' onClick={() => handleWebsite()}>
            <LanguageIcon className={classes.webIcon} />
          </IconButton>
        )}
        {latitude && (
          <IconButton
            title='Navigate'
            onClick={() => handleDirections(latitude, longitude)}
          >
            <DirectionsIcon className={classes.navIcon} />
          </IconButton>
        )}
        {phone && (
          <IconButton
            touchRippleColor='darkRed'
            title='Phone'
            onClick={() => handlePhone(phone)}
          >
            <PhoneIcon className={classes.phoneIcon} />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  breweryContainer: {
    width: 320,
    height: 200,
    backgroundColor: '#202020',
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContent: {
    marginBottom: 12,
    color: '#FFF',
    opacity: '70%',
  },
  phoneIcon: {
    fill: '#FF0266',
  },
  navIcon: {
    fill: '#03DAC6',
  },
  webIcon: {
    fill: '#BB86FC',
  },
});

export default Brewery;
