import { atom } from 'recoil'

export const DataEntriesAtom = atom({
  key: 'dataEntries', // * unique ID (with respect to other atoms/selectors)
  default: [] // * default value (aka initial value)
})

export const ReminderEntriesAtom = atom({
  key: 'reminderEntries', // * unique ID (with respect to other atoms/selectors)
  default: [] // * default value (aka initial value)
})
