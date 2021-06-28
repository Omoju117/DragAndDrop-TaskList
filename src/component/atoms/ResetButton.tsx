import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  reset: () => void;
};

const ResetButton: VFC<Props> = ({ reset }) => (
  <Button color="google plus" onClick={reset}>
    Reset
  </Button>
);

export default ResetButton;
