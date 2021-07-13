import { VFC } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignInButton: VFC = () => (
  <>
    <Link to="/DragAndDrop-TaskList/signIn">
      <Button className="controlItem sign-in-button" color="linkedin">
        Sign In
      </Button>
    </Link>
  </>
);

export default SignInButton;
