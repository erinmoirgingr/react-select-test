import GravatarOption from './CustomOption';
import GravatarValue from './CustomSingleValue';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

const USERS = require('../data/users');

class UsersField extends React.Component {
    static propTypes = {
		hint: PropTypes.string,
		label: PropTypes.string,
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
					onOptionLabelClick={this.onLabelClick}
					placeholder="Select user"
					optionComponent={GravatarOption}
					singleValueComponent={GravatarValue}
					options={USERS}/>
				{this.renderHint()}
			</div>
		);
	}
}

module.exports = UsersField;
