import { MenuItem, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deburr } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 250,
    flexGrow: 1,
  },
  container: {
    position: 'relative',
    marginLeft: 20,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
    width: 500,
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    // width: 500,
  },
}));

export const SearchBar = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();
  const variables: ListAdsQueryVariables = {
    filter:
      searchTerm && searchTerm.trim()
        ? {
            or: [{ title: { contains: searchTerm } }],
          }
        : null,
    limit: 100,
  };

  const { data } = useListAdsQuery({
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const ads = data && data.listAds ? data.listAds.items : [];
  function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        // fullWidth
        InputProps={{
          inputRef: (node) => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input,
          },
        }}
        {...other}
      />
    );
  }

  function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : ads.filter((suggestion) => {
          const keep =
            count < 5 &&
            suggestion.title.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  const handleSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  function handleSuggestionsClearRequested() {
    setSuggestions([]);
  }

  function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.title, query);
    const parts = parse(suggestion.title, matches);

    return (
      <MenuItem selected={isHighlighted} component='div'>
        <div>
          {parts.map((part) => (
            <span
              key={part.text}
              style={{ fontWeight: part.highlight ? 500 : 400 }}
            >
              {part.text}
            </span>
          ))}
        </div>
      </MenuItem>
    );
  }

  function handleSuggestionSelected(event, { suggestion, method }) {
    if (method === 'enter') {
      event.preventDefault();
    }
    setSearchTerm(suggestion.title);
    router.push(`/ad/${suggestion.id}`);
  }

  function getSuggestionValue(suggestion) {
    return suggestion.title;
  }
  const autosuggestProps = {
    renderInputComponent,
    suggestions: suggestions,
    onSuggestionsFetchRequested: handleSuggestionsFetchRequested,
    onSuggestionsClearRequested: handleSuggestionsClearRequested,
    getSuggestionValue,
    renderSuggestion,
    onSuggestionSelected: handleSuggestionSelected,
  };
  return (
    <div>
      <Autosuggest
        {...autosuggestProps}
        // suggestions={suggestions}
        // onSuggestionsFetchRequested={}
        // onSuggestionsClearRequested={}
        // getSuggestionValue={}
        // renderSuggestion={}
        // // {(suggestion) => (
        // //   <Link href={`/ad/${suggestion.id}`}>{suggestion.title}</Link>
        // // )}

        // onSuggestionSelected={}
        inputProps={{
          classes,
          placeholder: 'Chercher',
          // autoComplete: 'abcd',
          value: searchTerm,
          name: 'annonce',
          onChange: (_event, { newValue }) => {
            setSearchTerm(newValue);
          },
        }}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={(options) => (
          <Paper {...options.containerProps} square style={{ width: 500 }}>
            {options.children}
          </Paper>
        )}
      />
    </div>
  );
};
