import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),
  },
  formTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(1),
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#333333",
  },
  fileInputContainer: {
    display: "flex",
    marginTop: theme.spacing(1),
  },
  fileInputButton: {
    // We will style this directly in Form.js for now using Button props
  },
  buttonSubmit: {
    fontSize: "0.9rem",
    fontWeight: "600",
    borderRadius: theme.shape.borderRadius * 2,
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    boxShadow: 'none',
    textTransform: 'none',
    padding: theme.spacing(1, 3),
    '&:hover': {
      boxShadow: `0px 2px 4px -1px ${theme.palette.primary.dark}40`,
      backgroundColor: theme.palette.primary.dark,
    }
  },
  buttonClear: {
    fontSize: "0.9rem",
    borderRadius: theme.shape.borderRadius * 2,
    textTransform: 'none',
    padding: theme.spacing(1, 3),
    borderColor: theme.palette.grey[400],
    color: theme.palette.grey[700],
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
    '&:hover': {
      borderColor: theme.palette.grey[600],
      backgroundColor: theme.palette.grey[100],
    }
  },
  buttonsContainer: {
    display: 'flex',
    gap: theme.spacing(2),
    marginTop: theme.spacing(1),
  }
}));
