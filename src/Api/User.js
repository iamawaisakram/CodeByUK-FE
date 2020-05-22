// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { UserRoutes } from './ApiRoutes'

// TODO: Send Toaster here on error and success(if required)

export const LoginAPI = data => {
  return AxiosWrapper.POST(UserRoutes.LOGIN, data)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      return true
    })
    .catch(e => e.response.data)
}

export const RegisterAPI = data => {
  AxiosWrapper.POST(UserRoutes.REGISTER, data)
    .then(response => console.log('result', response))
    .catch(e => console.log(e.response.data))
}

export const GetAllUsersAPI = () => {
  AxiosWrapper.GET(UserRoutes.ALL)
    .then(response => response.data.users)
    .catch(e => console.log(e.response.data))
}

export const CurrentUserProfileAPI = () => {
  AxiosWrapper.GET(UserRoutes.ME)
    .then(response => response.data.user)
    .catch(e => console.log(e.response.data))
}
