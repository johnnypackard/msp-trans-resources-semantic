import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { triggerLogout } from '../../redux/actions/loginActions';
// import { fetchUser } from '../../redux/actions/userActions';
import { Button, Menu, Dropdown, Icon } from 'semantic-ui-react';

const mapStateToProps = state => ({
  user: state.user,
});

const Nav = (props) => {
  console.log('passing these props:' );
  console.log(props);
  const loginButton = props.isLogin ? (
    <Menu.Item>
      <Button as={Link} name='logout' to='/goodbye' onClick={triggerLogout()}>
        Log Out
      </Button>
    </Menu.Item>
  ) : '';

    return(
      <Menu>
        <Menu.Menu position='left'>

          <Menu.Item>
            <img src='Nav/Transfeminist.svg' /> 
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} name='Home' to='/home' color='blue'>
              Home
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} name='About' to='/about' color='blue'>
              Resources
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} name='Resources' to='/resources' color='pink'>
              Resources
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} name='Volunteer' to='/volunteer' color='blue'>
              Resources
            </Button>
          </Menu.Item>
          
        </Menu.Menu>
        
        <Menu.Menu position='right'>

          <Dropdown item text='Profile'>
            <Dropdown.Menu>
              <Dropdown.Item icon='user' text='View Profile' />
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown>

          {loginButton}

        </Menu.Menu>
      </Menu>
    )
};

export default connect(mapStateToProps)(Nav);
