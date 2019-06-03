import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';
import '../../setupTests';

let wrapped;
beforeEach(() => {
  const initalState = {
    comments: ['Comment 1', 'Comment 2']
  };
  wrapped = mount(
    <Root initalState={initalState}>
      <CommentList />
    </Root>
  );
});
it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});
