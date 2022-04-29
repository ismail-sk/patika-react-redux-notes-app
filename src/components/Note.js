import { MdDeleteForever } from 'react-icons/md';

const Note = ({
	id,
	text,
	date,
	bgColor,
	handleDeleteNote
}) => {

	return (
		<div className='note' style={{backgroundColor: bgColor}}>
			
			<span>{text}</span>

			<div className='note-footer'>
				<small>{date}</small>

				<MdDeleteForever
					onClick={() => handleDeleteNote(id)}
					className='icon'
					size='1.5em'
				/>
			</div>

		</div>
	);
};

export default Note;
