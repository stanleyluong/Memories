import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  spacer: {
    marginBottom: theme.spacing(3),
  },
  mainContainer: {
    // If you have specific styles for the main content grid
    // For example, if you want to ensure it doesn't get too wide on very large screens
    // maxWidth: '1200px',
    // margin: '0 auto',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    zIndex: theme.zIndex.modal + 1, // Ensure it's above other elements like Snackbars if any
  },
}));
