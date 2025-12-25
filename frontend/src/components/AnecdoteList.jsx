import { useSelector, useDispatch } from 'react-redux'
import { toggleImportanceOf } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleVote = (anecdote) => dispatch(voteAnecdote(anecdote))

  return (
    <ul>
      {anecdotes.map(a => (
        <li key={a.id}>
          {a.content} - votes {a.votes} 
          <button onClick={() => handleVote(a)}>vote</button>
        </li>
      ))}
    </ul>
  )
}

export default AnecdoteList
