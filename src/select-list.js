// @flow
/**
 * This component represents an unadorned list of SelectItem (s).
 */
import React, { Component } from 'react';
import _ from 'lodash';
import SelectItem from './select-item.js';

import type {
    Option,
} from './select-item.js';

class SelectList extends Component {
    props: {
        focusIndex: number,
        ItemRenderer?: Function,
        options: Array<Option>,
        selected: Array<Object>,
        onSelectedChanged: (selected: any) => void,
        onClick: (event: MouseEvent, index: number) => void,
    }

    activeLevel;

    handleSelectionChanged = (option: Option, checked: boolean) => {
        const { selected, onSelectedChanged } = this.props;
        let currentSelected = selected;

        if (checked) {
            currentSelected = [...selected, option.value];
        } else {
            const index = selected.indexOf(option.value);
            currentSelected = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1),
            ];
        }

        if (option.level) {
            //if hierarchical item, to compute highest menu (lowest level)
            this.activeLevel = 99;

            _.each(this.props.options, (o) => {
                if (currentSelected.indexOf(o.value) >= 0 && o.level && o.level < this.activeLevel) {
                    this.activeLevel = o.level;
                }
            });

            currentSelected = _.filter(currentSelected, (s) => {
                const o = _.find(this.props.options, {value:s});
                return o.level <= this.activeLevel;
            });
        }

        onSelectedChanged(currentSelected);
    }

    renderItems() {
        const {
            ItemRenderer,
            options,
            selected,
            focusIndex,
            onClick,
        } = this.props;

        return options.map((o, i) =>
            <li style={styles.listItem} key={i}>
                <SelectItem
                    focused={focusIndex === i}
                    option={o}
                    onSelectionChanged={c => this.handleSelectionChanged(o, c)}
                    checked={selected.includes(o.value)}
                    onClick={e => onClick(e, i)}
                    ItemRenderer={ItemRenderer}
                    selected={selected}
                    options={options}
                    disable={o.level ? o.level > this.activeLevel : false}
                />
            </li>
        );
    }

    render() {
        return <ul style={styles.list}>
            {this.renderItems()}
        </ul>;
    }
}

const styles = {
    list: {
        margin: 0,
        paddingLeft: 0,
    },
    listItem: {
        listStyle: 'none',
    },
};

export default SelectList;
