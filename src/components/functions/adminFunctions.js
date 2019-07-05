
import axios from 'axios'

const URL = "http://localhost:5000"

export const loginuser = ({email,password}) => {
  return axios.post(`${URL}/user/login`, 
  {email: email,password: password})
  .then(res => {
     return res.data  })
}
