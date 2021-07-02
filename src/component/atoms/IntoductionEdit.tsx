import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

/* -----操作方法を紹介するためのコンポーネント（ソート用）----- */

const IntroductionEdit: VFC = () => {
  const vanishIntroduction = () => {
    document
      .querySelector('.introduction-space-edit')
      ?.classList.toggle('introduction-space-none');
  };

  return (
    <>
      <div className="introduction-space-edit">
        <Button color="facebook" onClick={() => vanishIntroduction()}>
          Got it!
        </Button>
      </div>
    </>
  );
};

export default IntroductionEdit;
