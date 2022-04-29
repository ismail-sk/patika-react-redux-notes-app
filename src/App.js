import { useEffect } from 'react';

import NotesList from './components/NotesList';
import Header from './components/Header';

import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { setNotes } from "./redux/main";

const App = () => {
	
	const dispatch = useDispatch();

	const notes = useSelector((state) => state.themaSet.notes);
	const searchText = useSelector((state) => state.themaSet.searchText);
	const dark = useSelector((state) => state.themaSet.value);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			dispatch(setNotes(savedNotes));;
		}
	},[]);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	return (
		<div className={`${dark && 'dark-mode'}`}>
			<div className='container'>
				<Header />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
				/>
			</div>
		</div>
	);
};

export default App;
