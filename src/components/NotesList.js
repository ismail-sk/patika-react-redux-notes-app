import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes }) => {

	return (
		<div className='notes-list'>
		<AddNote />

			{notes.map((note) => (
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					bgColor={note.noteColor}
				/>
				))
			}
		</div>
	);
};

export default NotesList;
