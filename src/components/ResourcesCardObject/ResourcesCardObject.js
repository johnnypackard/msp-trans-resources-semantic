// import React, { Component } from 'react';
// import { Grid, Card, Icon, Image, Button, Container } from 'semantic-ui-react';
// import AppHeader from '../AppHeader/AppHeader';

// class ResourceCardObject extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             biz_name: '',
//             contact_name: '',
//             address: '',
//             gender: '',
//             race: '',
//             language: '',
//             image_url: '',
//             biz_notes: '',
//         }
//     }

//     //     biz_name VARCHAR (1000),
// //     contact_name VARCHAR (100),
// //     address VARCHAR (500),
// //     gender VARCHAR (100),
// //     race VARCHAR (100),
// //     language VARCHAR (100),
// //     image_url VARCHAR (2083),
// // 	biz_notes VARCHAR (2083),
//     render() {
//         return (
//             <div>
//                 <Card className={classes.card}>
//                     <CardHeader
//                         avatar={
//                             <Avatar 
//                                 alt="Transfeminist" 
//                                 src="./Transfeminist.svg" 
//                                 className={classes.avatar}
//                             />
//                         }
//                         action={
//                             <IconButton>
//                                 <MoreVertIcon />
//                             </IconButton>
//                         }
//                         title={(this.props.businesses.biz_name)}
//                         subheader="Verified Business"
//                     />
//                     <CardMedia
//                         className={classes.media}
//                         image={(this.props.businesses.image_url)}
//                         title={(this.props.businesses.biz_name)}
//                     />
//                     <CardContent>
//                         <Typography component="p">
//                             Something goes here...
//                         </Typography>
//                     </CardContent>
//                     <CardActions className={classes.actions} disableActionSpacing>
//                         <IconButton aria-label="Add to favorites">
//                             <FavoriteIcon />
//                         </IconButton>
//                         <IconButton
//                             className={classnames(classes.expand, {
//                                 [classes.expandOpen]: this.state.expanded,
//                             })}
//                             onClick={this.state.expanded}
//                             aria-label="Show more"
//                         >
//                             <ExpandMoreIcon />
//                         </IconButton>
//                     </CardActions>
//                     <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
//                             <CardContent>
//                                 <Typography paragraph variant="body2">
//                                     Reviews:
//                                 </Typography>
//                             </CardContent>
//                     </Collapse>
//                 </Card>
//             </div>
//         );
//     }
// }


