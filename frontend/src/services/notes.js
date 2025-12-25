const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await fetch(baseUrl)
  return response.json()
}

const createNew = async (content) => {
  const newNote = { content, important: false }
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newNote)
  })
  return response.json()
}

export default { getAll, createNew }
