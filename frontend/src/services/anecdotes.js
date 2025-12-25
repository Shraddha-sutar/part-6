const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const res = await fetch(baseUrl)
  return res.json()
}

export const createNew = async (content) => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, votes: 0 })
  })
  return res.json()
}

export const updateAnecdote = async (id, updatedAnecdote) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedAnecdote)
  })
  return res.json()
}
