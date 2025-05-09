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
    padding: theme.spacing(1.25, 0),
    fontSize: "0.95rem",
    fontWeight: "600",
  },
  buttonClear: {
    padding: theme.spacing(1, 0),
    fontSize: "0.9rem",
  },
}));
