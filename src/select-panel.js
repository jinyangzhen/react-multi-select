// @flow
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
import { filterOptions } from 'fuzzy-match-utils';
import React, { Component } from 'react';
import _ from 'lodash';
import SelectItem from './select-item.js';
import SelectList from './select-list.js';

import type {
    Option,
} from './select-item.js';


function defaultIsLeaf(option, options) {
    //TODO, assume type of leaf level value is always not Array or stringified Array, this may not be true in future and probably to further involve 'level' to justify  
    if (_.isArray(option.value)) {
        return false;
    } else if (typeof option.value === 'string' && option.value.startsWith('[')) {
        try {
            let v = JSON.parse(option.value);
            return false;
        } catch (ex) { }
    }

    return true;
}

class SelectPanel extends Component {
    state = {
        searchHasFocus: false,
        searchText: "",
        focusIndex: 0,
    }

    props: {
        ItemRenderer?: Function,
        options: Array<Option>,
        selected: Array<any>,
        selectAllLabel?: string,
        enableSearch?: boolean,
        onSelectedChanged: (selected: Array<any>) => void,
        leafOnly?:boolean,
        isLeafChecker?:Function,
    }

    selectAll = () => {
        const { onSelectedChanged, options, isLeafChecker } = this.props;
        const isLeaf = isLeafChecker ? isLeafChecker : defaultIsLeaf;
        const allValues = _.chain(options).map((o) => {
            return isLeaf(o, options) ? o.value : null;
        }).without(null, undefined).value();

        onSelectedChanged(allValues);
    }

    selectNone = () => {
        const { onSelectedChanged } = this.props;

        onSelectedChanged([]);
    }

    selectAllChanged = (checked: boolean) => {
        if (checked) {
            this.selectAll();
        } else {
            this.selectNone();
        }
    }

    handleSearchChange = (e: { target: { value: any } }) => {
        this.setState({
            searchText: e.target.value,
            focusIndex: -1,
        });
    }

    handleItemClicked = (index: number) => {
        this.setState({ focusIndex: index });
    }

    clearSearch = () => {
        this.setState({ searchText: "" });
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 38: // Up Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(-1);
                break;
            case 40: // Down Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(1);
                break;
            default:
                return;
        }

        e.stopPropagation();
        e.preventDefault();
    }

    handleSearchFocus = (searchHasFocus: boolean) => {
        this.setState({
            searchHasFocus,
            focusIndex: -1,
        });
    }

    allAreSelected() {
        const { options, selected, isLeafChecker } = this.props;
        const isLeaf = isLeafChecker ? isLeafChecker : defaultIsLeaf;
        const leafs = _.chain(options).map(o => isLeaf(o, options) ? o.value : null).without(null, undefined).value();
        return leafs.length === selected.length;
    }

    filteredOptions() {
        const { searchText } = this.state;
        const { options } = this.props;

        return filterOptions(options, searchText);
    }

    updateFocus(offset: number) {
        const { focusIndex } = this.state;
        const { options } = this.props;

        let newFocus = focusIndex + offset;
        newFocus = Math.max(0, newFocus);
        newFocus = Math.min(newFocus, options.length);

        this.setState({ focusIndex: newFocus });
    }

    render() {
        const { focusIndex, searchHasFocus } = this.state;
        const { ItemRenderer, selectAllLabel, enableSearch, leafOnly } = this.props;

        const selectAllOption = {
            label: selectAllLabel,
            value: "",
        };

        const focusedSearchStyle = searchHasFocus
            ? styles.searchFocused
            : undefined;

        return <div
            style={styles.panel}
            role="listbox"
            onKeyDown={this.handleKeyDown}
        >
            {
                enableSearch ? <div style={styles.searchContainer}>
                    <input
                        placeholder="Search"
                        type="text"
                        onChange={this.handleSearchChange}
                        style={{ ...styles.search, ...focusedSearchStyle }}
                        onFocus={() => this.handleSearchFocus(true)}
                        onBlur={() => this.handleSearchFocus(false)}
                    />
                </div> : ''
            }
            {
                selectAllLabel
                    ? <SelectItem
                        focused={focusIndex === 0}
                        checked={this.allAreSelected()}
                        option={selectAllOption}
                        onSelectionChanged={this.selectAllChanged}
                        onClick={() => this.handleItemClicked(0)}
                        selectable={true}
                        ItemRenderer={ItemRenderer} /> : ''
            }
            <SelectList
                {...this.props}
                options={this.filteredOptions()}
                focusIndex={focusIndex - 1}
                onClick={(e, index) => this.handleItemClicked(index + 1)}
                ItemRenderer={ItemRenderer}
                leafOnly={leafOnly}
            />
        </div>;
    }
}

const styles = {
    panel: {
        boxSizing: 'border-box',
    },
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "3px",

        boxSizing: 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid',
        borderColor: '#dee2e4',
        padding: '10px',
        width: "100%",
        outline: "none",
    },
    searchFocused: {
        borderColor: "#96C8DA",
    },
    searchContainer: {
        width: "100%",
        boxSizing: 'border-box',
        padding: "0.5em",
    },
};

export default SelectPanel;
