import { useDispatch, useSelector } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  return (
    <div>
      <label>
        <input type="radio" name="filter" checked={filter === 'ALL'} onChange={() => dispatch(filterChange('ALL'))} /> all
      </label>
      <label>
        <input type="radio" name="filter" checked={filter === 'IMPORTANT'} onChange={() => dispatch(filterChange('IMPORTANT'))} /> important
      </label>
      <label>
        <input type="radio" name="filter" checked={filter === 'NONIMPORTANT'} onChange={() => dispatch(filterChange('NONIMPORTANT'))} /> nonimportant
      </label>
    </div>
  )
}

export default VisibilityFilter
