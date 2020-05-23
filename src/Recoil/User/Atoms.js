import { atom } from 'recoil'

export const textState = atom({
  key: 'textState', // * unique ID (with respect to other atoms/selectors)
  default: '' // * default value (aka initial value)
})

export const AllUsersAtom = atom({
  key: 'allUsers',
  default: []
})

export const MyProfileAtom = atom({
  key: 'myProfile',
  default: undefined
})
