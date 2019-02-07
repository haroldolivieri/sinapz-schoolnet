import React from 'react'
import { TextField } from '@material-ui/core'
import SearchRounded from '@material-ui/icons/SearchRounded'

const SearchInput = () => (
    <TextField
        fullWidth={true}
        label="Busque por alunos, professores e filiais"
        InputProps={{
            endAdornment: <SearchRounded />
        }}
    />
)

export default SearchInput
