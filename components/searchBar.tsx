import { Button, TextField } from '@material-ui/core';
import { validateSchema } from 'graphql';
import { useState } from 'react';
import { ListAdsQueryVariables, useListAdsQuery } from 'src';
import { Advertising } from './ads/Ad';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from 'next/link';
import { useRouter } from 'next/router';
export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const variables: ListAdsQueryVariables = {
    filter:
      searchTerm && searchTerm.trim()
        ? {
            or: [
              { title: { contains: searchTerm } },
              
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
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id='free-solo-2-demo'
        disableClearable
        options={ads.map((ad) => ad.title)}
        renderInput={(params) => (
          <div>
            <TextField
              {...params}
              label='Search input'
              margin='normal'
              variant='outlined'
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
            {/* <Button
              onClick={() => {
                router.push(`/ad/${params.id}`);
              }}
            >
              Chercher
            </Button> */}
          </div>
        )}
      />
    </div>
  );
};
