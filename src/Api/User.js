import { useRecoilState } from 'recoil'

// * Recoil Atoms
import { AllUsersAtom, MyProfileAtom } from '../Recoil/User/Atoms'

// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { UserRoutes } from './ApiRoutes'

// TODO: Send Toaster here on error and success(if required)

export const LoginAPI = data => {
  AxiosWrapper.POST(UserRoutes.LOGIN, data)
    .then(response => {
      console.log('result', response)
      // response.data
    })
    .catch(e => e.response.data)
}

export const RegisterAPI = data => {
  AxiosWrapper.POST(UserRoutes.REGISTER, data)
    .then(response => console.log('result', response))
    .catch(e => console.log(e.response.data))
}

export const GetAllUsersAPI = () => {
  const [allUsers, setAllUsers] = useRecoilState(AllUsersAtom)
  AxiosWrapper.GET(UserRoutes.ALL)
    .then(response => {
      console.log('result', response)
      setAllUsers(response.data.users)
    })
    .catch(e => console.log(e.response.data))
}

export const CurrentUserProfileAPI = () => {
  const [myProfile, setMyProfile] = useRecoilState(MyProfileAtom)
  AxiosWrapper.GET(UserRoutes.ME)
    .then(response => {
      console.log('result', response)
      setMyProfile(response.data.user)
    })
    .catch(e => console.log(e.response.data))
}
