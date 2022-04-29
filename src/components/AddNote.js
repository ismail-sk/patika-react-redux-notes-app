import { useState } from 'react';
import { MdSave, MdCancel } from 'react-icons/md';
import { CirclePicker } from 'react-color';

const AddNote = ({ handleAddNote }) => {

	const [noteText, setNoteText] = useState('');	
	const [noteColor, setNoteColor] = useState("#F6FFA4");

	const handleChange = (event) => {
			setNoteText(event.target.value);
	};
	const handleClean = () => {
		setNoteText("");
		setNoteColor("#F6FFA4");
	}

	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNote(noteText, noteColor);
			setNoteText('');
		}
	};


	const handleColor = (color) => {
		setNoteColor(color.hex);
	}
	

	return (
		<div className='note new'>

			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteText}
				onChange={handleChange}
			></textarea>

			<div className='note-footer'>
				<MdCancel  visibility={noteText.length ? "visible" : "hidden"}
					onClick={handleClean}
					className='icon'
					size='1.3em'
					/>

				<CirclePicker
					onChange={ handleColor } width={"8.5em"} circleSize={20} circleSpacing={6}
					colors={["#B6AACE", "#F6FFA4", "#FDD7AA", "#A1E3D8", "#FFA1A1"]}
					/>
				
				<MdSave visibility={noteText.length ? "visible" : "hidden"}
					onClick={handleSaveClick}
					className='icon'
					size='1.3em'
					/>
					
			</div>
		</div>
	);
};

export default AddNote;
