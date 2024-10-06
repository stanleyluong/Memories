import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
    onSearch("");
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search by name, message, tag, or title"
      fullWidth
      value={searchQuery}
      onChange={handleSearchChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <FontAwesomeIcon icon={faSearch} />
          </InputAdornment>
        ),
        endAdornment: searchQuery && (
          <InputAdornment position="end">
            <IconButton onClick={clearSearch}>
              <FontAwesomeIcon icon={faTimes} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
