import { VFC } from 'react';

/* ----- アプリケーション本体のヘッダー ------ */
const ApplicationHeader: VFC = () => (
  <>
    <header className="site-header">
      <div className="wrapper">
        <div className="site-header-inner">
          <h1>Drag & Drop TaskList</h1>
        </div>
      </div>
    </header>
  </>
);

export default ApplicationHeader;
