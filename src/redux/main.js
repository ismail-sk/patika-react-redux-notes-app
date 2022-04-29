import { createSlice, current } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';
export const themaSlice = createSlice({
    name: 'themaMod',
    initialState: {
        value: false,
        searchText: "",
        notes: [
            {
                id: nanoid(),
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                date: '15/04/2022',
                noteColor: "#FDD7AA",
            },
            {
                id: nanoid(),
                text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets",
                date: '21/04/2022',
                noteColor: "#A1E3D8",
            },
            {
                id: nanoid(),
                text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                date: '28/04/2022',
                noteColor: "#F6FFA4",
            },
            {
                id: nanoid(),
                text: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form',
                date: '30/04/2022',
                noteColor: "#FFA1A1",
            },
        ],
    },
    reducers: {
        switchThema: (state) => {
            state.value = !state.value;
        },

        setNotes: (state, param) => {
            state.notes = param.payload;
        },

        noteSearch: (state, inText) => {
            state.searchText = inText.payload;
        },

        addingNote: (state, addThis) => {            
            const date = new Date();
            const newNote = {
                id: nanoid(),
                text: addThis.payload[0],
                date: date.toLocaleDateString(),
                noteColor: String(addThis.payload[1]),
            };
		
            state.notes = [newNote, ...state.notes];
        },

		delNote: (state, thisid) => {
            let tmp = current(state.notes);
            state.notes = tmp.filter((note) => note.id !== thisid.payload);
    }
    },
}) 

//export const themaPack = (state) => state.themaSet.value;

export const { switchThema, noteSearch, addingNote, delNote, notes, setNotes } = themaSlice.actions;
export default themaSlice.reducer;