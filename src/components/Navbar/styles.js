import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    margin: '0 0 30px 0',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1.5, 3),
    backgroundColor: '#ffffff',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.06), 0px 4px 5px 0px rgba(0,0,0,0.04), 0px 1px 10px 0px rgba(0,0,0,0.03)',
  },
  heading: {
    color: '#333333',
    textDecoration: "none",
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  image: {
    marginLeft: theme.spacing(2),
    height: '45px',
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(2),
  },
  profile: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(1),
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  purple: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  logout: {
    marginLeft: theme.spacing(2),
  },
  signInButton: {
  },
  profileButton: {
    textTransform: 'none',
    padding: theme.spacing(0.5, 1),
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    }
  }
}));
