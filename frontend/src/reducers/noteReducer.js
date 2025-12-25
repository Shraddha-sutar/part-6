import { createSlice } from '@reduxjs/toolkit'
import * as noteService from '../services/notes'

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    setNotes(state, action) { return action.payload },
    addNote(state, action) { state.push(action.payload) },
    updateNote(state, action) {
      const updated = action.payload
      return state.map(n => n.id === updated.id ? updated : n)
    }
  }
})

export const { setNotes, addNote, updateNote } = noteSlice.actions

export const initializeNotes = () => async dispatch => {
  const notes = await noteService.getAll()
  dispatch(setNotes(notes))
}

export const appendNote = content => async dispatch => {
  const newNote = await noteService.createNew(content)
  dispatch(addNote(newNote))
}

export const voteNote = anecdote => async dispatch => {
  const updated = { ...anecdote, votes: anecdote.votes + 1 }
  const res = await noteService.updateAnecdote(anecdote.id, updated)
  dispatch(updateNote(res))
}

export default noteSlice.reducer
