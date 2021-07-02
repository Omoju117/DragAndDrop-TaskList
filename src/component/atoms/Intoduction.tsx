import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

/* -----操作方法を紹介するためのコンポーネント（アップデート処理用）----- */

const Introduction: VFC = () => {
  const vanishIntroduction = () => {
    document
      .querySelector('.introduction-space')
      ?.classList.toggle('introduction-space-none');
  };

  return (
    <>
      <div className="introduction-space">
        <Button color="facebook" onClick={() => vanishIntroduction()}>
          Got it!
        </Button>
      </div>
    </>
  );
};

export default Introduction;
