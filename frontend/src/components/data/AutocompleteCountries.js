import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveShippingAddress } from '../../actions/cartActions'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Autocomplete from '@material-ui/lab/Autocomplete'
import countries from '../../data/countries'

const AutocompleteCountries = () => {
  const [value, setValue] = useState(countries[0])

  const dispatch = useDispatch()

  const countrySelection = (isoCode) => {
    return typeof String.fromCodePoint !== 'undefined'
      ? isoCode
          .toUpperCase()
          .replace(/./g, (char) =>
            String.fromCodePoint(char.charCodeAt(0) + 127397)
          )
      : isoCode
  }

  const selectionHandler = (country) => {
    dispatch(saveShippingAddress({ country }))
  }

  return (
    <Box mt={2}>
      <Autocomplete
        value={value}
        onChange={(e, newValue) => {
          setValue(newValue)
          selectionHandler(newValue.label)
        }}
        disableClearable
        id='country-select-demo'
        options={countries}
        autoHighlight
        getOptionSelected={(x) => x.label}
        getOptionLabel={(option) => option.label}
        renderOption={(option) => (
          <>
            <span>{countrySelection(option.code)}</span>
            {option.label} ({option.code}) +{option.phone}
          </>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            required
            id='standard-helperText'
            label='Country'
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
    </Box>
  )
}

export default AutocompleteCountries
