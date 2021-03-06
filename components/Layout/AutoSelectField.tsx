import { MenuItem, Paper, TextField } from '@material-ui/core';
import { useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import Autosuggest from 'react-autosuggest';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { deburr } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 500,
    backgroundColor: 'white',
    heigth: 45,
  },
  container: {
    position: 'relative',
    marginLeft: 20,
    width: 500,
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
        className={classes.root}
        // variant='filled'
        InputProps={{
          inputRef: (node) => {
            ref(node);

            inputRef(node);
          },
          // classes: {
          //   input: classes.input,
          // },
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon
                fontSize='small'
                style={{
                  paddingLeft: 5,
                }}
              />
            </InputAdornment>
          ),
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
          if (suggestion.title.toLowerCase().includes(value.toLowerCase())) {
            return suggestion.title;
          }
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
    router.push(`/offres/${suggestion.id}`);
    setSearchTerm('');
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
          placeholder: 'Chercher une annonce...',
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
