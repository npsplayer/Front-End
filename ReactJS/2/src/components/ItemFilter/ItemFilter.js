import React from 'react';
import './ItemFilter.css'


class ItemFilter extends React.Component {
	render() {
		const { filterItemAll, filterItemToDo, filterItemDone } = this.props;

		return (            
			<div className="container-tab-btn">
                <button className="tab-btn all" onClick={filterItemAll}>All</button>
                <button className="tab-btn active" onClick={filterItemToDo}>Active</button>
                <button className="tab-btn done" onClick={filterItemDone}>Done</button>
            </div>
		);
	}
}
export default ItemFilter;