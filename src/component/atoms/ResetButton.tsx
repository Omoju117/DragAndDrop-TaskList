import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

/* -----タスクを全て削除するためのResetボタン----- */

type Props = {
  reset: () => void;
};

const ResetButton: VFC<Props> = ({ reset }) => (
  <Button className="controlItem" color="google plus" onClick={reset}>
    Reset
  </Button>
);

export default ResetButton;
