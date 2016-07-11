/**
 * @providesModule skillsReducer
 * @flow
 */
export const initialState = {
  ...require('../lib/skills.json')
};
export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {

    default:
      return state;
  }
};
