import React from 'react';
import Search from './Search';

import { MdBrightnessMedium } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';
import { switchThema } from '../redux/main';

const Header = () => {
	
	const dispatch = useDispatch();
	const dark = useSelector((state) => state.themaSet.value);

	return (
		<div className='header'>
			<h1>NotesApp</h1>
			<Search />
				<MdBrightnessMedium
					onClick={() => dispatch(switchThema())}
					className='icon'
					color={`${dark ? 'white': 'black'}`}
					size='1.3em'
					/>
		</div>
	);
};

export default Header;
