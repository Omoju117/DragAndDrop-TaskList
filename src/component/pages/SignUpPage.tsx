/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { VFC, useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Spinner } from 'react-activity';
import { useDispatch } from 'react-redux';
import ApplicationHeader from '../templates/ApplicationHeader';
import InputForm from '../atoms/InputForm';
import { UserInfo } from '../../Data/data';
import BackToHomeButton from '../atoms/BackToHomeButton';
import { refreshTask, setLoginUser } from '../../actions';
import { initialState } from '../../reducer';

const SignUpPage: VFC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [errorMsgCode, setErrorMsgCode] = useState('');
  const dispatch = useDispatch();

  /* ------------入力フォームに関する処理------------ */
  // 入力フォームの入力を受付けるための処理
  const handleUserName = (target: HTMLInputElement) => {
    setUserName(target !== null ? target.value : '');
  };

  const handlePassword = (target: HTMLInputElement) => {
    // パスワードは8文字までとする
    if (target.value.length > 8) {
      return;
    }
    setPassword(target !== null ? target.value : '');
  };
  /* ------------------------------------------ */

  /* ------------非同期通信に関する処理------------ */
  //   const url = 'http://localhost:5000/api/users/signUp';
  const url =
    'http://draganddroptasklist-env.eba-btryk2uf.ap-northeast-1.elasticbeanstalk.com/api/users/signUp';

  const [signal, setSignal] = useState(0);

  const onSignUp = () => {
    setSignal(signal + 1);
  };

  useEffect(() => {
    async function signUp() {
      const postData: UserInfo = { userName, password };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData),
      };

      setIsLoading(true);
      await fetch(url, requestOptions)
        .then((res) => res.json())
        .then((result) => {
          if (result === true) {
            // ログインユーザーを設定
            dispatch(setLoginUser(userName));
            dispatch(refreshTask(initialState));
            setRedirectToHome(true);
          } else if (result === 'ErrorCode:001') {
            setErrorMsgCode('ErrorCode:001');
            setRedirectToHome(false);
          }
        });
    }
    // Sign Upボタンを押下した時にだけ非同期通信を実行。
    if (signal > 0) {
      setErrorMsgCode('');
      if (userName.length === 0 || password.length === 0) {
        setErrorMsgCode('ErrorCode:002');
      }
      void signUp();
      setIsLoading(false);
    }
    setSignal(0);
  }, [signal, userName, password, dispatch]);

  return (
    <>
      <ApplicationHeader signUp={<BackToHomeButton />} />
      <div className="sign-in-space">
        <h1>Sign Up</h1>
        <InputForm
          inputValue={userName}
          placeholder="userName"
          onChangeHandler={(e) => handleUserName(e.target)}
        />
        <InputForm
          inputValue={password}
          placeholder="password"
          onChangeHandler={(e) => handlePassword(e.target)}
        />
        <Button color="green" onClick={() => onSignUp()}>
          Sign Up
        </Button>
        {errorMsgCode === 'ErrorCode:001' ? (
          <p>既に同じ名前とパスワードのユーザーが存在します😥</p>
        ) : null}
        {errorMsgCode === 'ErrorCode:002' ? (
          <p>ユーザー名とパスワードは1文字以上入力してください😣</p>
        ) : null}
      </div>
      {redirectToHome ? <Redirect to="/DragAndDrop-TaskList" /> : null}
      {isLoading ? (
        <Spinner color="#727981" size={32} speed={1} animating />
      ) : null}
    </>
  );
};

export default SignUpPage;
