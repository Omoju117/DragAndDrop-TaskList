import { VFC } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BackToHomeButton: VFC = () => (
  <>
    <Link to="/DragAndDrop-TaskList/">
      <Button className="controlItem sign-up-button" color="black">
        Home
      </Button>
    </Link>
  </>
);

export default BackToHomeButton;
