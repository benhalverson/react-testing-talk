// import { saveComment } from 'actions';
// import { SAVE_COMMENT } from 'actions/types';

import { saveComment } from '../../actions/index';
import { SAVE_COMMENT } from '../../actions/types';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment('save_comment');
    expect(action.type).toEqual('save_comment');
  });
});
