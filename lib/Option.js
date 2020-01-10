'use strict';

var React = require('react');
var classes = require('classnames');

class Option extends React.Component {

    blockEvent(event) {
		event.preventDefault();
		if (event.target.tagName !== 'A' || !('href' in event.target)) {
			return;
		}

		if (event.target.target) {
			window.open(event.target.href);
		} else {
			window.location.href = event.target.href;
		}
	}

    handleMouseDown(e) {
		this.props.mouseDown(this.props.option, e);
	}

    handleMouseEnter(e) {
		this.props.mouseEnter(this.props.option, e);
	}

    handleMouseLeave(e) {
		this.props.mouseLeave(this.props.option, e);
	}

    render() {
		var option = this.props.option;
		var label = option.create ? this.props.addLabelText.replace('{label}', option.label) : this.props.renderFunc(option);
		var optionClasses = classes(this.props.className, option.className);

		return option.disabled ? React.createElement(
			'div',
			{ className: optionClasses,
				onMouseDown: this.blockEvent,
				onClick: this.blockEvent },
			label
		) : React.createElement(
			'div',
			{ className: optionClasses,
				style: option.style,
				onMouseDown: this.handleMouseDown,
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeave,
				onClick: this.handleMouseDown,
				title: option.title },
			label
		);
	}
}

module.exports = Option;