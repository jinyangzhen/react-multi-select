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
        leafOnly?:boolean,
    }

    activeLevel;

    computeActiveLevel(selected, options) {
        //if hierarchical item, to compute topest menu (lowest level)
        this.activeLevel = 99;

        _.each(options, (o) => {
            if (selected.indexOf(o.value) >= 0 && o.level && o.level < this.activeLevel) {
                this.activeLevel = o.level;
            }
        });
    }

    handleSelectionChanged = (option: Option, checked: boolean) => {
        const { selected, onSelectedChanged, options } = this.props;
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

        if (option.level !== undefined && option.level !== null) {
            this.computeActiveLevel(currentSelected, options);
            currentSelected = _.filter(currentSelected, (s) => {
                const o = _.find(this.props.options, { value: s });
                return o && o.level <= this.activeLevel;
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
            leafOnly,
        } = this.props;

        this.computeActiveLevel(selected, options);
        let leafObj = _.maxBy(options, 'level');

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
                    selectable={leafOnly ? o.level === leafObj.level : true}
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
