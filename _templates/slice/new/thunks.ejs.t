---
to: src/store/slices/<%= h.changeCase.camel(name) %>/thunks.ts
---
import { AppThunk } from '../../types';

export const exampleThunk = (): AppThunk => (dispatch, getState) => {
  // const {} = getState();
  // dispatch()
};
