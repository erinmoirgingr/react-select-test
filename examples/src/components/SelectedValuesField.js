import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

function logChange() {
	console.log.apply(console, [].concat(['Select value changed:'], Array.prototype.slice.apply(arguments)));
}

class SelectedValuesField extends React.Component {
    static displayName = 'SelectedValuesField';

    static propTypes = {
		allowCreate: PropTypes.bool,
		hint: PropTypes.string,
		label: PropTypes.string,
		options: PropTypes.array,
	};

    onLabelClick = (data, event) => {
		console.log(data, event);
	};

    renderHint = () => {
		if (!this.props.hint) return null;
		return (
			<div className="hint">{this.props.hint}</div>
		);
	};

    render() {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					allowCreate={this.props.allowCreate}
					onOptionLabelClick={this.onLabelClick}
					value={this.props.options.slice(1,3)}
					multi
					placeholder="Select your favourite(s)"
					options={this.props.options}
					onChange={logChange} />
				{this.renderHint()}
			</div>
		);
	}
}

module.exports = SelectedValuesField;
