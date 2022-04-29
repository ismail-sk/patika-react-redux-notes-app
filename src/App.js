import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '15/04/2022',
			noteColor: "#FDD7AA",
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '21/04/2022',
			noteColor: "#A1E3D8",
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '28/04/2022',
			noteColor: "#F6FFA4",
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '30/04/2022',
			noteColor: "#FFA1A1",
		},
	]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	},[]);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text, bgColor) => {
		console.log("seçilen ",bgColor);
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
			noteColor: bgColor,
		};
		const newNotes = [newNote, ...notes];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} handleSearchNote={setSearchText}/>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
