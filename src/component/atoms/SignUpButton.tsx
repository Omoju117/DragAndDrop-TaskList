import { VFC } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignUpButton: VFC = () => (
  <>
    <Link to="/DragAndDrop-TaskList/signUp">
      <Button className="controlItem sign-up-button" color="green">
        Sign Up
      </Button>
    </Link>
  </>
);

export default SignUpButton;
