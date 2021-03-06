import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

var CONTRIBUTORS = require('../data/contributors');

class Contributors extends React.Component {
    static displayName = 'Contributors';

    static propTypes = {
		hint: PropTypes.string,
		label: PropTypes.string,
	};

    state = {
        value: 'jedwatson',
    };

    onChange = (value) => {
		this.setState({
			value: value
		});
	};

    loadOptions = (input, callback) => {
		console.log(input);
		input = input.toLowerCase();
		var data = {
			options: CONTRIBUTORS.filter(i => {
				return i.github.substr(0, input.length) === input;
			}),
			complete: true
		};
		setTimeout(function() {
			callback(null, data);
		}, 500);
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
				<Select multi value={this.state.value} onChange={this.onChange} valueKey="github" labelKey="name" asyncOptions={this.loadOptions} />
				{this.renderHint()}
			</div>
		);
	}
}

module.exports = Contributors;
