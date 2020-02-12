import React from 'react';
import "./AddItem.css"
class AddItem extends React.Component {
	state = {
		label: ""
	};

	onChange = (e) => {
		const value = e.target.value;
		this.setState({ label: value });
	};

	render() {
		const { onAdded } = this.props;
		const { label } = this.state;
		return (
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onAdded(label);
					this.setState({ label: '' });
				}}
			>
				<input className='addInput' type="text" placeholder="Input new task..." onChange={this.onChange} value={label} />
				<button className='addItem'>Add</button>
			</form>
		);
	}
}

export default AddItem;