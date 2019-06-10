/*
 ** Types
 */

export const Types = {
  ADD_REQUEST: 'events/ADD_REQUEST',
  ADD_SUCCESS: 'events/ADD_SUCCESS',
  ADD_FAILURE: 'events/ADD_FAILURE',
};

/*
 ** Reducers
 */

const INITIAL_STATE = {
  data: [],
};

export default function events(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
      };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  eventRequest: token => ({
    type: Types.ADD_REQUEST,
    payload: { token },
  }),

  eventSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  eventFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
