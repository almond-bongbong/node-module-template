import React from 'react';
import { render, screen } from '@testing-library/react';

describe('test', () => {
  it('correct', () => {
    render(<div>hello</div>);
    screen.getByText('hello');
  });

  // it('wrong', () => {
  //   render(<div>hello</div>);
  //   screen.getByText('hello2');
  // });
});
