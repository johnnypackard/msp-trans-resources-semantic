import React, { Component } from 'react';
import { Grid, Card, Icon, Image, Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

class ResourcesPage extends Component {
    render() {
        return(
            <div>
                <Grid columns={3} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Housing</Card.Header>
                                    <Card.Meta textAlign='center'>Do you need assistance with housing?</Card.Meta>
                                    <Card.Description>
                                        Homelessness is a critical issue for transgender people; one in five transgender individuals have experienced homelessness at some point in their lives.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='blue' size='large' labelPosition='left'>
                                            Housing
                                            <Icon name='building' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Financial</Card.Header>
                                    <Card.Meta textAlign='center'>Find financial assistance</Card.Meta>
                                    <Card.Description>
                                        Transgender people are nearly four times more likely to have a household income of less than $10,000, compared to the general population.
                                        Whether saving for the future and in need of financial planning, in need of financial assistance, or both, we know people who can help.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='pink' size='large' labelPosition='left'>
                                            Financial
                                            <Icon name='dollar sign' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Legal Services</Card.Header>
                                    <Card.Meta textAlign='center'>Name Change and Other Legal Needs</Card.Meta>
                                    <Card.Description>
                                        You deserve to be treated with dignity and respect in court, but unfortunately, not all judges and court staff will respect your gender identity or expression, sexual orientation, or HIV status.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='blue' size='large' labelPosition='left'>
                                            Legal
                                            <Icon name='balance scale' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Healthcare</Card.Header>
                                    <Card.Meta textAlign='center'>Mental and Medical Health</Card.Meta>
                                    <Card.Description>
                                        Within the TBLGQI+ community, transgender people can face an exceptional degree of discomfort and bias, especially in healthcare.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='pink' size='large' labelPosition='left'>
                                            Mental Health
                                            <Icon name='talk' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Education</Card.Header>
                                    <Card.Meta textAlign='center'>School and University</Card.Meta>
                                    <Card.Description>
                                        One basic area of student diversity which schools rarely acknowledge is gender. However, gender inclusive schools and classrooms welcoming all people are within our community's reach.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='blue' size='large' labelPosition='left'>
                                            Education
                                            <Icon name='graduation' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card>
                                <Image>
                                    ...
                                </Image>
                                <Card.Content>
                                    <Card.Header textAlign='center'>Community</Card.Header>
                                    <Card.Meta textAlign='center'>Local TBLGQI+ inclusive businesses.</Card.Meta>
                                    <Card.Description>
                                        We've all experienced the fear of walking into a business for the first time, and wondering if it is a safe space. These resources are available to help lessen that fear.
                                    </Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <div className='ui buttonLabeledIcon'>
                                        <Button fuild icon color='pink' size='large' labelPosition='left'>
                                            Community
                                            <Icon name='coffee' />
                                        </Button>
                                    </div>
                                </Card.Content>   
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );    
    }
}


export default ResourcesPage;


