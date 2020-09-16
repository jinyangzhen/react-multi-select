// @flow
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
import React, { Component } from 'react';
import Style from 'style-it';
import LoadingIndicator from './loading-indicator.js';

class Dropdown extends Component {

    state = {
        expanded: false,
        hasFocus: false,
        hovered: false,
        clearable: false,
    }

    componentWillMount() {
        this.setState({ clearable: this.props.contentProps.selected.length > 0 });
    }

    componentWillUpdate() {
        document.addEventListener('touchstart', this.handleDocumentClick);
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('touchstart', this.handleDocumentClick);
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    props: {
        children?: Object,
        contentComponent: Object,
        contentProps: Object,
        isLoading?: boolean,
        leafOnly?: boolean,
        disabled?: boolean,
    }

    wrapper: Object

    handleDocumentClick = (event: Event) => {
        if (this.wrapper && !this.wrapper.contains(event.target)) {
            this.setState({ expanded: false });
        }
    }

    handleKeyDown = (e: KeyboardEvent) => {
        if (!this.props.disabled) {
            switch (e.which) {
                case 27: // Escape
                    this.toggleExpanded(false);
                    break;
                case 38: // Up Arrow
                    this.toggleExpanded(false);
                    break;
                case 40: // Down Arrow
                    this.toggleExpanded(true);
                    break;
                default:
                    return;
            }
        }

        e.preventDefault();
    }

    handleFocus = (e: { target: any }) => {
        const { hasFocus } = this.state;

        if (!this.props.disabled && e.target === this.wrapper && !hasFocus) {
            this.setState({ hasFocus: true });
        }
    }

    handleBlur = (e: { target: any }) => {
        const { hasFocus } = this.state;

        if (!this.props.disabled && hasFocus) {
            this.setState({ hasFocus: false });
        }
    }

    toggleExpanded = (value: ?boolean) => {
        const { isLoading } = this.props;
        const { expanded } = this.state;

        if (isLoading) {
            return;
        }

        const newExpanded = value === undefined ? !expanded : !!value;

        this.setState({ expanded: newExpanded });

        if (!newExpanded && this.wrapper) {
            this.wrapper.focus();
        }
    }

    renderPanel() {
        let self = this;
        const { contentComponent: ContentComponent, contentProps } = this.props;

        let relay = contentProps.onSelectedChanged;

        //react on onSelectedChanged called by sub component SelectPanel, make sure show close btn if non empty
        contentProps['onSelectedChanged'] = (values) => {
            self.setState({ clearable: values.length > 0 });
            //rely selected values
            relay(values);
        }

        const panelStyles = _.clone(styles.panelContainer)
        const { bottom, top } = this.wrapper.getBoundingClientRect()
        const spaceToViewportBottom = window.innerHeight - bottom
        const { options } = contentProps
        const dropdownHeight = Math.min((options.length + 1) * 34 + 44, 500)
        if (dropdownHeight > spaceToViewportBottom && top > dropdownHeight) {
            // top area is engouh to display the dropdown panel, convert style to raise-up
            _.assign(panelStyles, { top: 'unset', bottom: '100%', borderBottomStyle: 'none', borderTopColor: '#96C8DA' })
        }

        return <div style={panelStyles}>
            <ContentComponent ref='selectPanel' {...contentProps} />
        </div>;
    }

    render() {
        const self = this;
        const { expanded, hasFocus, hovered, clearable } = this.state;
        const { children, isLoading, contentProps, disabled } = this.props;

        const expandedHeaderStyle = expanded
            ? styles.dropdownHeaderExpanded
            : undefined;

        const focusedHeaderStyle = hasFocus
            ? styles.dropdownHeaderFocused
            : undefined;

        const hoverHeaderStyle = hovered && !hasFocus && !expanded
            ? styles.dropdownHeaderHover
            : undefined;

        // const arrowStyle = expanded
        //     ? styles.dropdownArrowUp
        //     : styles.dropdownArrowDown;

        // const focusedArrowStyle = hasFocus || expanded
        //     ? styles.dropdownArrowDownFocused
        //     : undefined;

        return <div id='simple-multiple-select'
            tabIndex="0"
            role="combobox"
            aria-expanded={expanded}
            aria-readonly="true"
            style={styles.dropdownContainer}
            ref={ref => this.wrapper = ref}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onMouseEnter={() => {
                if (disabled) {
                    return;
                }
                this.setState({ hovered: true })
            }}
            onMouseLeave={() => {
                if (disabled) {
                    return;
                }
                this.setState({ hovered: false })
            }} >
            <Style>{xClass}</Style>
            <div style={{
                ...styles.dropdownHeader,
                ...(disabled ? styles.disable : styles.enable),
                ...expandedHeaderStyle,
                ...hoverHeaderStyle,
                ...focusedHeaderStyle,
            }} >
                <span style={styles.dropdownChildren} onClick={() => {
                    if (disabled) {
                        return;
                    }
                    this.toggleExpanded()
                }}>
                    {children}
                </span>
                <span style={styles.loadingContainer}>
                    {isLoading && <LoadingIndicator />}
                </span>
                {
                    (expanded || hovered) && clearable ? <span className='xButton' onClick={(e) => {
                        if (disabled) {
                            return;
                        }
                        if (self.refs.selectPanel) {
                            self.refs.selectPanel.selectNone();
                        }
                        else {
                            contentProps.onSelectedChanged([]);
                            self.setState({ clearable: false })
                        }
                        e.stopPropagation();
                        e.preventDefault();
                    }} /> : ''
                }
                <span id='dropdown-arrow' style={styles.dropdownArrow} onClick={() => {
                    if (disabled) {
                        return;
                    }
                    this.toggleExpanded()
                }}>
                    <span style={{
                        //  ...arrowStyle,
                        //  ...focusedArrowStyle,
                        ...styles.dropdownArrowDown,
                    }}
                    />
                </span>
            </div>
            {expanded && this.renderPanel()}
        </div>;
    }
}

const xClass = `
                .xButton {
                    display: table-cell;
                    position: relative;
                    width: 16px;
                    height: 16px;
                    transition: transform .25s ease-in-out;
                }
                .xButton:before {
                    content: "";
                    position: absolute;
                    display: block;
                    margin: auto;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 16px;
                    height: 0;
                    border-top: 1px solid rgba(0,0,0,0.5);
                    transform: rotate(45deg);
                    transform-origin: center;
                }
                .xButton:after {
                    content: "";
                    position: absolute;
                    display: block;
                    margin: auto;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    width: 16px;
                    height: 0;
                    border-top: 1px solid rgba(0,0,0,0.5);
                    transform: rotate(-45deg);
                    transform-origin: center;
                }
                .xButton:hover {
                    cursor:pointer;
                }
`

const focusColor = '';

const styles = {
    dropdownArrow: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'table-cell',
        position: 'relative',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 25,
        paddingRight: 5,
    },
    dropdownArrowDown: {
        boxSizing: 'border-box',
        borderColor: 'rgb(204, 204, 204) transparent transparent',
        borderStyle: 'solid',
        borderWidth: '4px 4px 2px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative',
    },
    // dropdownArrowDownFocused: {
    //     borderColor: `${focusColor} transparent transparent`,
    // },
    // dropdownArrowUp: {
    //     boxSizing: 'border-box',
    //     top: '-2px',
    //     borderColor: 'transparent transparent #999',
    //     borderStyle: 'solid',
    //     borderWidth: '0px 5px 5px',
    //     display: 'inline-block',
    //     height: 0,
    //     width: 0,
    //     position: 'relative',
    // },
    dropdownChildren: {
        boxSizing: 'border-box',
        bottom: 0,
        color: '#333',
        left: 0,
        lineHeight: '34px',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteWpace: 'nowrap',
    },
    dropdownContainer: {
        position: 'relative',
        boxSizing: 'border-box',
        outline: 'none',
        width: '100%',
    },
    dropdownHeader: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderColor: 'rgba(34, 36, 38, 0.15)',
        borderRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        border: '1px solid rgba(34, 36, 38, 0.15)',
        color: 'rgba(0, 0, 0, 0.87)',
        cursor: 'default',
        display: 'table',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: 38,
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
    },
    disable: {
        backgroundColor: '#f7f7f7',
    },
    enabled: {
        backgroundColor: '#fff',
    },
    dropdownHeaderFocused: {
        borderColor: '#96C8DA',
        boxShadow: 'none',
    },
    dropdownHeaderHover: {
        borderColor: 'rgba(34, 36, 38, 0.35)'
    },
    dropdownHeaderExpanded: {
        borderColor: '#96C8DA',
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
    loadingContainer: {
        cursor: 'pointer',
        display: 'table-cell',
        verticalAlign: 'middle',
        width: '16px',
    },
    panelContainer: {
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
        backgroundColor: '#fff',
        border: '1px solid #96C8DA',
        borderTopColor: '#e6e6e6',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '500px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 99,
        overflowY: 'auto',
    },
};

export default Dropdown;
