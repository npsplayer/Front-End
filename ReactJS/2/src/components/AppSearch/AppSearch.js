import React from 'react';
import "./AppSearch.css"
class AppSearch extends React.Component {
	render() {
        const { onSearch } = this.props;
        
        return <input type="text" className="search-input" placeholder="Search..." onChange={onSearch}/>;
	}
}
export default AppSearch;

