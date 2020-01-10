import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

function logChange() {
	console.log.apply(console, [].concat(['Select value changed:'], Array.prototype.slice.apply(arguments)));
}

class DisabledUpsellOptions extends React.Component {
    static displayName = 'DisabledUpsellOptions';

    static propTypes = {
		label: PropTypes.string,
	};

    onLabelClick = (data, event) => {
		console.log(data, event);
	};

    renderLink = () => {
		return <a style={{ marginLeft: 5 }} href="/upgrade" target="_blank">Upgrade here!</a>;
	};

    renderOption = (option) => {
		return <span>{option.label} {option.link} </span>;
	};

    render() {
		var ops = [
			{ label: 'Basic customer support', value: 'basic' },
			{ label: 'Premium customer support', value: 'premium' },
			{ label: 'Pro customer support', value: 'pro', disabled: true, link: this.renderLink() },
		];
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onOptionLabelClick={this.onLabelClick}
					placeholder="Select your support level"
					options={ops}
					optionRenderer={this.renderOption}
					onChange={logChange} />
			</div>
		);
	}
}

module.exports = DisabledUpsellOptions;
