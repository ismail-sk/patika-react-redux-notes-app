import React from 'react';
import Search from './Search';
import { MdBrightnessMedium } from 'react-icons/md';

const Header = ({ handleToggleDarkMode, darkMode, handleSearchNote}) => {
	return (
		<div className='header'>
			<h1>NotesApp</h1>
			<Search handleSearchNote={handleSearchNote} />
				<MdBrightnessMedium
					onClick={() =>
						handleToggleDarkMode(
							(previousDarkMode) => !previousDarkMode
						)
					}
					className='icon'
					color={`${darkMode ? 'white': 'black'}`}
					size='1.3em'
					/>
		</div>
	);
};

export default Header;
