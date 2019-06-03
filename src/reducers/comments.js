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

export default function(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}
