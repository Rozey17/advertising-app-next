import { TextField } from '@material-ui/core';
import { validateSchema } from 'graphql';
import { useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Advertising } from './ads/Ad';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const variables: ListAdsQueryVariables = {
    filter:
      searchTerm && searchTerm.trim()
        ? {
            or: [
              { title: { contains: searchTerm } },
              {
                adSubCategoryID: {
                  contains: '77dd219b-fe80-4a4a-82bf-df1782e2bff1',
                },
              },
            ],
          }
        : null,
    limit: 100,
  };
  const { data, loading } = useListAdsQuery({
    variables,
    notifyOnNetworkStatusChange: true,
  });

  const ads = data && data.listAds ? data.listAds.items : [];

  return (
    <Autocomplete
      freeSolo
      id='free-solo-2-demo'
      disableClearable
      options={ads.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search input'
          margin='normal'
          variant='outlined'
          InputProps={{ ...params.InputProps, type: 'search' }}
        />
      )}
    />
    // <TextField
    //   onChange={(event) => {
    //     setSearchTerm(event.target.value);
    //   }}
    // >
    //   {ads
    //     .filter((ad) => {
    //       if (searchTerm == '') {
    //         return ad;
    //       } else if (
    //         ad.title.toLowerCase().includes(searchTerm.toLowerCase())
    //       ) {
    //         return ad;
    //       }
    //     })
    //     .map((ad) => (
    //       // <Advertising ad={ad} key={ad.id} />
    //       <a>{ad.title}</a>
    //     ))}
    // </TextField>
  );
};
