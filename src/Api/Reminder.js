import { useRecoilState } from 'recoil'

// * Recoil Atoms
import { DataEntriesAtom, ReminderEntriesAtom } from '../Recoil/Data/Atoms'

// * Axios Wrapper
import AxiosWrapper from './AxiosWrapper'

// * Api Routes
import { DataRoutes } from './ApiRoutes'

export const AddDataAPI = data => {
  const [dataEntries, setDataEntries] = useRecoilState(DataEntriesAtom)
  AxiosWrapper.POST(DataRoutes.ADD_DATA, data)
    .then(response => setDataEntries(response.data.entries))
    .catch(e => e.response.data)
}

export const AddReminderAPI = data => {
  const [reminderEntries, setReminderEntries] = useRecoilState(
    ReminderEntriesAtom
  )
  AxiosWrapper.POST(DataRoutes.ADD_REMINDER, data)
    .then(response => setReminderEntries(response.data.entries))
    .catch(e => e.response.data)
}
