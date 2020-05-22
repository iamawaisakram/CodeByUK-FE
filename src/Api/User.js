import { toast } from 'react-toastify'

// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { UserRoutes } from './ApiRoutes'

export const LoginAPI = data => {
  return AxiosWrapper.POST(UserRoutes.LOGIN, data)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      return true
    })
    .catch(e => toast.error(e.response.data.message))
}

export const RegisterAPI = data => {
  AxiosWrapper.POST(UserRoutes.REGISTER, data)
    .then(response =>
      toast.success('Account Created Successfully, Login to Continue!')
    )
    .catch(e => toast.error(e.response.data.message))
}

export const GetAllUsersAPI = () => {
  return AxiosWrapper.GET(UserRoutes.ALL)
    .then(response => response.data.users)
    .catch(e => toast.error(e.response.data.message))
}

export const CurrentUserProfileAPI = () => {
  AxiosWrapper.GET(UserRoutes.ME)
    .then(response => response.data.user)
    .catch(e => toast.error(e.response.data.message))
}
