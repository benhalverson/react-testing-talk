import React from 'react';
import { mount } from 'enzyme';
import '../../setupTests';
import CommentBox from '../CommentBox';
import Root from '../../Root';
//Arrange
//Assert
//Act

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

it('it has a text area two buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
  beforeEach(() => {
    // does not affect the outer beforeEach
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment'
      }
    });
    wrapped.update();
  });
  it('has a text area that users can type in ', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});

afterEach(() => {
  wrapped.unmount();
});
