import { Button, ButtonType } from './Button';
import { render } from '@testing-library/react';

describe('Button Component', () => {
  it('should render a Button Component', () => {
    render(
      <Button
        buttonType={ButtonType.PRIMARY}
        onClick={() => console.log('test')}>
        Click Me
      </Button>,
    );
  });
});
