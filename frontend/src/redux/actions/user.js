import axios from "axios"
import { authenticateUserUrl } from '../../constants'


export const authenticateUser = () => async (dispatch) => {
    try {
      dispatch({
        type: 'AuthenticateUserRequest'
      })

      const { data } = await axios.get(authenticateUserUrl, { withCredentials: true })

      dispatch({
        type: 'AuthenticateUserSuccess',
        payload: data.user,
      })

    } catch (err) {
      dispatch({
        type: 'AuthenticateUserFailure',
        payload: err.response.data.message
      })
    }
  }