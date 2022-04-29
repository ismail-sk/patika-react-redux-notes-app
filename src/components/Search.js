import React from 'react';
import { MdSearch, MdCancel } from 'react-icons/md';

import { noteSearch } from '../redux/main';
import { useDispatch } from "react-redux";

const Search = () => {
	const dispatch = useDispatch();

	const handleClean = (e) => {
		dispatch(noteSearch(""));
		e.currentTarget.previousSibling.value ="";

	}
	return (
		<div className='search'>
			<MdSearch className='icon' size='1.5em' />
			<input
				onChange={(event) =>{
					dispatch(noteSearch(event.target.value));}
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
