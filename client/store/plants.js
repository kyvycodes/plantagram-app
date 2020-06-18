import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PLANTS = 'GET_PLANTS'

/**
 * ACTION CREATORS
 */
const getPlants = plants => ({
  type: GET_PLANTS,
  plants
})

/**
 * THUNK CREATORS
 */
export const fetchPlants = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/plants')
      const plants = getPlants(res.data)
      dispatch(plants)
    } catch (error) {
      console.error(error)
    }
  }
}
/**
 * INITIAL STATE
 */
const initialState = []

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLANTS:
      return action.plants
    default:
      return state
  }
}