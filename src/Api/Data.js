import { toast } from 'react-toastify'

// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { DataRoutes } from './ApiRoutes'

export const AddDataAPI = data => {
  return AxiosWrapper.POST(DataRoutes.ADD_DATA, data)
    .then(response => response.data.entries)
    .catch(e => toast.error(e.response.data.message))
}

export const AddReminderAPI = data => {
  return AxiosWrapper.POST(DataRoutes.ADD_REMINDER, data)
    .then(response => response.data.entries)
    .catch(e => toast.error(e.response.data.message))
}

export const GetDataEntriesAPI = () => {
  return AxiosWrapper.GET(DataRoutes.GET_DATA_ENTRIES)
    .then(response => response.data.entries)
    .catch(e => toast.error(e.response.data.message))
}

export const GetReminderEntriesAPI = () => {
  return AxiosWrapper.GET(DataRoutes.GET_REMINDER_ENTRIES)
    .then(response => response.data.entries)
    .catch(e => toast.error(e.response.data.message))
}

export const GetTestResultsAPI = () => {
  return AxiosWrapper.GET(DataRoutes.GET_TEST_RESULTS)
    .then(response => response.data.result)
    .catch(e => toast.error(e.response.data.message))
}
