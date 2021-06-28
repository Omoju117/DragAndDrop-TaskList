import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  addTask: () => void;
  disabled: boolean;
};

const AddButton: VFC<Props> = ({ addTask, disabled }) => (
  <Button color="olive" onClick={addTask} disabled={disabled}>
    +
  </Button>
);

export default AddButton;
