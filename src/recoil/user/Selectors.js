import { selector } from 'recoil'

// * API Calls
import { GetAllUsersAPI } from '../../Api/User'

export const GetAllUserQuery = selector({
  key: 'getAllUsersQuery',
  get: async ({ get }) => {
    return await GetAllUsersAPI()
  }
})
