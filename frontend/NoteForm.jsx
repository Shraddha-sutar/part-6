import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NoteForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.note.value
    e.target.note.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  )
}

export default NoteForm
