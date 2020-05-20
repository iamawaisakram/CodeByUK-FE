import { selector } from 'recoil';

// * Atoms
import { textState } from './Atoms';

export const charCountState = selector({
  key: 'charCountState', // * unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
