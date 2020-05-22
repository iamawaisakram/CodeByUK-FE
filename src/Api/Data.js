// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { DataRoutes } from './ApiRoutes'

export const AddDataAPI = data => {
  return AxiosWrapper.POST(DataRoutes.ADD_DATA, data)
    .then(response => response.data.entries)
    .catch(e => e.response.data)
}

export const AddReminderAPI = data => {
  return AxiosWrapper.POST(DataRoutes.ADD_REMINDER, data)
    .then(response => response.data.entries)
    .catch(e => e.response.data)
}

export const GetDataEntriesAPI = () => {
  return AxiosWrapper.GET(DataRoutes.GET_DATA_ENTRIES)
    .then(response => response.data.entries)
    .catch(e => {
      console.log(e.response.data)
      return []
    })
}

export const GetReminderEntriesAPI = () => {
  return AxiosWrapper.GET(DataRoutes.GET_REMINDER_ENTRIES)
    .then(response => response.data.entries)
    .catch(e => {
      console.log(e.response.data)
      return []
    })
}
