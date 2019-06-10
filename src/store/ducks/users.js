/*
 ** Types
 */

export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',
};

/*
 ** Reducers
 */

const INITIAL_STATE = {
  token: null,
  error: false,
  loading: true,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        token: null,
      };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addUserRequest: (email, password) => ({
    type: Types.ADD_REQUEST,
    payload: { email, password },
  }),

  addUserSuccess: token => ({
    type: Types.ADD_SUCCESS,
    payload: { token },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
