
import {createAction} from 'redux-actions'

import {
  SEARCH_FETCHED,
  CLOSE_SEARCH
} from '../constants/action-types'

export const searchFetched = createAction(SEARCH_FETCHED)
export const closeSearch = createAction(CLOSE_SEARCH)
