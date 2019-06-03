/**
 * Redux Design
 *
 * Data needed by CommentList
 *
 * State = {
 * comments: [`I'm a comment`, `I'm another comment`];
 * }
 *
 * Actions
 *
 * saveComment: Adds a comment via the 'comments' reducer
 */

import { SAVE_COMMENT } from 'actions/types';
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
