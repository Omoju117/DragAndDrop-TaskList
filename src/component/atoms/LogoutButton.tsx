import { VFC } from 'react';
import { Button } from 'semantic-ui-react';

const LogoutButton: VFC = () => (
  <>
    <a href="https://omoju117.github.io/DragAndDrop-TaskList/">
      <Button className="controlItem sign-up-button" color="black">
        Logout
      </Button>
    </a>
  </>
);

export default LogoutButton;
