import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import SearchRounded from '@material-ui/icons/SearchRounded'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { debounce } from 'throttle-debounce'
import { fetchSearchResults } from '../searchbar/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import '../css/SearchInput.css'

export const SearchResultItem = ({
    name = 'Unknown',
    description = 'Description',
    photoUrl = 'https://cdn.shopify.com/s/files/1/0539/4361/products/anonymous-guy-fawkes-anarchy-decal.jpg?v=1410346765',
    action = function() {}
}) => (
    <Paper square>
        <ListItem
            className="result-item"
            id="list-item"
            button
            onClick={action}
        >
            <ListItemIcon>
                <img className="result-icon" src={photoUrl} alt={name} />
            </ListItemIcon>
            <div>
                <p className="result-name">{name}</p>
                <p className="result-description">{description}</p>
            </div>
        </ListItem>
    </Paper>
)
SearchResultItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    photoUrl: PropTypes.string,
    action: PropTypes.func
}

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
        this.setStateForInput(event.target.value)
    }

    onResultClicked = (type, id) => {
        this.clearInput()
        //navigate to right page
    }

    clearInput = () => {
        this.setState({ searchInput: '' }, () => {
            this.autocompleteSearch(this.state.searchInput)
        })
    }

    setStateForInput = searchInput => {
        this.setState({ searchInput }, () => {
            this.autocompleteSearchDebounced(this.state.searchInput)
        })
    }

    autocompleteSearch = input => {
        this.props.fetchSearchResults(input)
    }

    render() {
        return (
            <div>
                <TextField
                    className="input-search"
                    fullWidth={true}
                    value={this.state.searchInput}
                    onChange={this.onInputChanged}
                    onBlur={this.clearInput}
                    label="Busque por alunos, professores e filiais"
                    InputProps={{
                        endAdornment: <SearchRounded />
                    }}
                />

                {this.props.results.length > 0 && (
                    <div className="results">
                        {this.props.results.map(item => (
                            <SearchResultItem
                                key={item.name}
                                name={item.name}
                                description={item.description}
                                action={this.onResultClicked.bind(
                                    this,
                                    item.type,
                                    item.id
                                )}
                            />
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    results: state.searchBar.get('searchResults')
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchSearchResults }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput)

SearchInput.propTypes = {
    results: PropTypes.array.isRequired,
    fetchSearchResults: PropTypes.func.isRequired
}
