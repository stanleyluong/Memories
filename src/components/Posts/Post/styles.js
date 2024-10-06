import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    transition: 'transform 0.3s ease',  // Optional, for zooming the image slightly
    '&:hover': {
      transform: 'scale(1.03)',         // Slight zoom on hover
    },
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',  // Initial shadow
    '&:hover': {
      transform: 'translateY(-10px)',  // Move the card up slightly on hover
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)',  // Increase shadow on hover
    },
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
