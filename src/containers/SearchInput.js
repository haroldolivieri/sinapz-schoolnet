import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import SearchRounded from '@material-ui/icons/SearchRounded'
import { debounce } from 'throttle-debounce'
import { searchInputChanged } from '../searchbar/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class SearchInput extends Component {
    constructor(props) {
        super(props)
        this.autocompleteSearchDebounced = debounce(
            500,
            this.autocompleteSearch
        )
    }

    state = {
        searchInput: ''
    }

    onInputChanged = event => {
        this.setState({ searchInput: event.target.value }, () => {
            this.autocompleteSearchDebounced(this.state.searchInput)
        })
    }

    autocompleteSearch = input => {
        if (input.length > 0) {
            this.props.searchInputChanged(input)
        }
    }

    render() {
        return (
            <TextField
                fullWidth={true}
                value={this.state.searchInput}
                onChange={this.onInputChanged}
                label="Busque por alunos, professores e filiais"
                InputProps={{
                    endAdornment: <SearchRounded />
                }}
            />
        )
    }
}

const mapStateToProps = state => ({
    results: state.searchBar.get('searchResults')
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ searchInputChanged }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput)
