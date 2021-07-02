import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

/* -----タスクの追加ボタンコンポーネント----- */

type Props = {
  addTask: () => void;
  disabled: boolean;
};

const AddButton: VFC<Props> = ({ addTask, disabled }) => (
  <Button
    className="controlItem"
    color="olive"
    onClick={addTask}
    disabled={disabled}
  >
    +
  </Button>
);

export default AddButton;
