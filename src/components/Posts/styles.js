import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  postsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: theme.spacing(2),
  },
  postWrapper: {
    width: '100%',
    maxWidth: '600px',
    marginBottom: theme.spacing(3),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));
