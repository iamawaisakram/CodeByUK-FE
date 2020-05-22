import { selector } from 'recoil'

// * API calls
import {
  GetReminderEntriesAPI,
  GetDataEntriesAPI,
  GetTestResultsAPI
} from '../../Api/Data'

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

export const GetTestResultsQuery = selector({
  key: 'testResultsQuery',
  get: async ({ get }) => {
    return await GetTestResultsAPI()
  }
})
