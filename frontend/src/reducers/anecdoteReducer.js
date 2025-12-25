// src/reducers/noteReducer.js
import { createSlice } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes(state, action) {
      // सर्व fetched notes replace करणे
      return action.payload
    },
    createNote(state, action) {
      // नवीन note state मध्ये add करणे
      state.push(action.payload)
    },
    toggleImportanceOf(state, action) {
      const id = action.payload
      const noteToChange = state.find(n => n.id === id)
      if (!noteToChange) return state
      const changedNote = { ...noteToChange, important: !noteToChange.important }
      return state.map(n => n.id !== id ? n : changedNote)
    }
  }
})

// Export synchronous actions
export const { setNotes, createNote, toggleImportanceOf } = noteSlice.actions

// Async action: initialize notes from backend
export const initializeNotes = () => {
  return async dispatch => {
    try {
      const notes = await noteService.getAll()
      dispatch(setNotes(notes))
    } catch (error) {
      console.error('Failed to fetch notes:', error)
    }
  }
}

// Async action: create a new note in backend
export const appendNote = content => {
  return async dispatch => {
    try {
      const newNote = await noteService.createNew(content)
      dispatch(createNote(newNote))
    } catch (error) {
      console.error('Failed to create note:', error)
    }
  }
}

export default noteSlice.reducer
