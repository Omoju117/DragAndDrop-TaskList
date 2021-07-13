import { ReactElement, VFC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer';

type Props = {
  signIn?: ReactElement;
  signUp?: ReactElement;
};

/* ----- アプリケーション本体のヘッダー ------ */
const ApplicationHeader: VFC<Props> = ({ signIn, signUp }) => {
  // もしサインアップが渡されていた場合、変数に代入
  const signInButton = signIn !== undefined ? signIn : null;
  const signUpButton = signUp !== undefined ? signUp : null;
  const loginUserState = useSelector<RootState, string>(
    (state: RootState) => state.loginUser,
  );
  const userName = loginUserState;

  return (
    <>
      <header className="site-header">
        <div className="wrapper">
          <div className="site-header-inner">
            <h1>Drag & Drop TaskList</h1>
            <div className="header-button-container">
              {userName} さん
              {signInButton}
              {signUpButton}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ApplicationHeader;
