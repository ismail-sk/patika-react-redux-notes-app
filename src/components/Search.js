import React from 'react';
import { MdSearch, MdCancel } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
		
	const handleClean = (e) => {
		handleSearchNote("");
		//console.log(e.currentTarget.previousSibling.value);
		e.currentTarget.previousSibling.value ="";

	}
	return (
		<div className='search'>
			<MdSearch className='icon' size='1.5em' />
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='Search...'
			/>
			<MdCancel  /* visibility={(e) => Boolean(e.currentTarget.previousSibling.value) ? "visible" : "hidden"} */
				onClick={handleClean}
				className='icon'
				size='1.5em'
			/>
		</div>
	);
};

export default Search;
