/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
/* eslint @typescript-eslint/no-explicit-any: 0 */
import { VFC } from 'react';

/* -----入力フォームのコンポーネント----- */

// TODO event.targetを引数に指定できない方法を調査する。一旦問題が出ないことは確認済みなのでanyで回避。
type Props = {
  taskName: string;
  onChangeHandler: (target: any) => void;
};

const InputForm: VFC<Props> = ({ taskName, onChangeHandler }) => (
  <input
    type="text"
    placeholder="Enter any task that you have to do."
    className="input-form controlItem"
    value={taskName}
    onChange={onChangeHandler}
  />
);

export default InputForm;
