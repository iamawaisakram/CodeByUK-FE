import { selector } from 'recoil'

// * API calls
import { GetReminderEntriesAPI, GetDataEntriesAPI } from '../../Api/Data'

export const GetDataEntriesQuery = selector({
  key: 'dataEntriesQuery',
  get: async ({ get }) => {
    return await GetDataEntriesAPI()
  }
})

export const GetReminderEntriesQuery = selector({
  key: 'reminderEntriesQuery',
  get: async ({ get }) => {
    return await GetReminderEntriesAPI()
  }
})
