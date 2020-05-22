import { atom } from 'recoil'

export const ViewRenderAtom = atom({
  key: 'viewRender', // * unique ID (with respect to other atoms/selectors)
  default: 'home' // * default value (aka initial value)
})
