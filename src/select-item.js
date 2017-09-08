// @flow
/**
 * This component represents an individual item in the multi-select drop-down
 */
import React, {Component} from 'react';

export type Option = {
    value: any,
    label: string,
};

class DefaultItemRenderer extends Component {
    props: {
        checked: boolean,
        option: Option,

        onClick: (event: MouseEvent) => void,
    }

    render() {
        const {checked, option, onClick} = this.props;

        return <span>
            <input
                type="checkbox"
                onChange={onClick}
                checked={checked}
                tabIndex="-1"
            />
            <span style={styles.label}>
                {option.label}
            </span>
        </span>;
    }
}

class SelectItem extends Component {
    static defaultProps = {
        ItemRenderer: DefaultItemRenderer,
    }

    state = {
        hovered: false,
    }

    componentDidMount() {
        this.updateFocus();
    }

    componentDidUpdate() {
        this.updateFocus();
    }

    itemRef: HTMLElement

    props: {
        ItemRenderer: Function,
        option: Option,
        checked: boolean,
        focused?: boolean,
        onSelectionChanged: (checked: boolean) => void,
        onClick: (event: MouseEvent) => void,
    }

    onChecked = (e: {target: {checked: boolean}}) => {
        const {onSelectionChanged} = this.props;
        const {checked} = e.target;

        onSelectionChanged(checked);
    }

    toggleChecked = () => {
        const {checked, onSelectionChanged} = this.props;
        onSelectionChanged(!checked);
    }

    handleClick = (e: MouseEvent) => {
        const {onClick} = this.props;
        this.toggleChecked();
        onClick(e);

        e.preventDefault();
    }

    updateFocus() {
        const {focused} = this.props;

        if (focused && this.itemRef) {
            this.itemRef.focus();
        }
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 13: // Enter
            case 32: // Space
                this.toggleChecked();
                break;
            default:
                return;
        }

        e.preventDefault();
    }

    render() {
        const {ItemRenderer, option, checked, focused} = this.props;
        const {hovered} = this.state;

        const focusStyle = (focused || hovered)
            ? styles.itemContainerHover
            : undefined;

        return <label
            role="option"
            aria-selected={checked}
            selected={checked}
            tabIndex="-1"
            style={{...styles.itemContainer, ...focusStyle}}
            onClick={this.handleClick}
            ref={ref => this.itemRef = ref}
            onKeyDown={this.handleKeyDown}
            onMouseOver={() => this.setState({hovered: true})}
            onMouseOut={() => this.setState({hovered: false})}
        >
            <ItemRenderer
                option={option}
                checked={checked}
                onClick={this.handleClick}
            />
        </label>;
    }
}


const styles = {
    itemContainer: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: '#666666',
        cursor: 'pointer',
        display: 'block',
        padding: '10px 10px',
        outline: 0,
    },
    itemContainerHover: {
        backgroundColor: 'rgba(0,0,0,0.06)',
        outline: 0,
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        cursor: 'default',
        padding: '2px 5px',
    },
};

export default SelectItem;
