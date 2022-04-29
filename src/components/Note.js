import { MdDeleteForever } from 'react-icons/md';

import { useDispatch } from "react-redux";
import {delNote} from "../redux/main"

const Note = ({
	id,
	text,
	date,
	bgColor
}) => {
	
	const dispatch = useDispatch();

	return (
		<div className='note' style={{backgroundColor: bgColor}}>
			
			<span>{text}</span>

			<div className='note-footer'>
				<small>{date}</small>

				<MdDeleteForever
					onClick={() => dispatch(delNote(id))}
					className='icon'
					size='1.5em'
				/>
			</div>

		</div>
	);
};

export default Note;
