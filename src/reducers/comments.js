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

import { SAVE_COMMENT, FETCH_COMMENTS } from '../actions/types';
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}
