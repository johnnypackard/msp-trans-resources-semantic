import React from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { Card, Icon, Image } from 'semantic-ui-react';


const mapStateToProps = state => ({
  user: state.user,
});

class ResourcesPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <p>
            What resources do you need?
          </p>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(InfoPage);
function ResourcesPage() {
    return(
        <div className='mainView'>
            <div className='mainContent'>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/TransIcon.svg"
                        title="Housing" 
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Housing
                        </Typography>
                        <Typography component="p">
                            Homelessness is a critical issue for transgender people; one in five transgender individuals have experienced homelessness at some point in their lives.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleClick('/housing')} size="small" color="primary">
                            Find Housing
                        </Button>
                    </CardActions>
                </Card>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image="images/TransIcon.svg"
                        title="Financial" 
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Housing
                        </Typography>
                        <Typography component="p">
                            Transgender people are nearly four times more likely to have a household income of less than $10,000, compared to the general population.
                            Whether saving for the future and in need of financial planning, in need of financial assistance, or both, we know people who can help.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={handleClick('/financial')} size="small" color="primary">
                            Find Housing
                        </Button>
                    </CardActions>
                </Card>
            </div>   
        </div>
    );
}


export default ResourcesPage;


