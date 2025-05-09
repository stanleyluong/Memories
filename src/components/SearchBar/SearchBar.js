import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, InputAdornment, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    // Add some padding or margin if needed when it's part of the AppBar
  },
  iconButton: {
    padding: theme.spacing(1.25), // Adjust padding to make icon larger/more clickable
  },
  textFieldExpanded: {
    // Styles for the TextField when expanded
    // marginRight: theme.spacing(1), // Example: if you want space before a potential close button
  },
  searchPaper: { // Optional: to wrap the expanding textfield for better visual separation
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius, // Use theme's border radius
  }
}));

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const classes = useStyles();
  const searchRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Or trigger search on submit/blur if preferred
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
    setIsExpanded(false); // Optionally collapse on clear
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Collapse if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        if (searchQuery === "") { // Only collapse if search query is empty
             setIsExpanded(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef, searchQuery]);

  if (!isExpanded) {
    return (
      <IconButton onClick={toggleExpand} className={classes.iconButton} aria-label="search">
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
    );
  }

  return (
    <Paper ref={searchRef} component="form" className={classes.searchPaper} elevation={1} onSubmit={(e) => e.preventDefault()}>
      <IconButton className={classes.iconButton} aria-label="search icon" disabled>
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
      <TextField
        variant="standard" // Using standard variant for a cleaner look within Paper
        placeholder="Search by name, message, tag, or title"
        fullWidth
        autoFocus // Focus when expanded
        value={searchQuery}
        onChange={handleSearchChange}
        className={classes.textFieldExpanded}
        InputProps={{
          disableUnderline: true, // Remove underline for standard variant if inside Paper
          // No startAdornment here as it's outside the TextField now
          endAdornment: searchQuery && (
            <InputAdornment position="end">
              <IconButton onClick={clearSearch} size="small" aria-label="clear search">
                <FontAwesomeIcon icon={faTimes} size="sm"/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        onBlur={(e) => { // check if the click is on the clear button
            if (!e.relatedTarget || !e.relatedTarget.closest('[aria-label="clear search"]')) {
                if (searchQuery === "") {
                     setIsExpanded(false);
                }
            }
        }}
      />
    </Paper>
  );
};

export default SearchBar;
