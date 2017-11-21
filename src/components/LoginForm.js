// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { emailChanged, passwordChanged, loginUser } from '../actions';
// import { Card, CardSection, Input, Button } from './common';
//
// class LoginForm extends Component {
//
//     // Helper methods
//     onEmailChange(text) {
//         // Access to action creator
//         this.props.emailChanged(text);
//     }
//
//     onPasswordChange(text) {
//         // Action creator
//         this.props.passwordChanged(text);
//     }
//
//     onButtonPress() {
//         const { email, password } = this.props;
//         this.props.loginUser({ email, password });
//     }
//
//     render() {
//         return (
//             <Card>
//                 <CardSection>
//                     <Input
//                         label="Email"
//                         placeholder="email@gmail.com"
//                         // Because it's a call-back use .bind(this) method
//                         onChangeText={this.onEmailChange.bind(this)}
//                         value={this.props.email}
//                     />
//                 </CardSection>
//
//                 <CardSection>
//                     <Input
//                         secureTextEntry
//                         label="Password"
//                         placeholder="password"
//                         // Event handler
//                         onChangeText={this.onPasswordChange.bind(this)}
//                         value={this.props.password}
//                     />
//                 </CardSection>
//
//                 <CardSection>
//                     <Button onPress={this.onButtonPress.bind(this)}>
//                         Login
//                     </Button>
//                 </CardSection>
//             </Card>
//         );
//     }
// }
//
// // RECAP: Ability to interface from application levle state down to component level
// // RECAP: Pluck properties off state object and inject into components
// // Whenever application state changes, mapstatetoprops function will rerun and causes component to rerender
// const mapStateToProps = state => {
//     return {
//         // auth because defined in index.js reducer file
//         email: state.auth.email,
//         password: state.auth.password
//     };
// };
//
// // Wire up action creator
// export default connect(mapStateToProps, {
//     emailChanged, passwordChanged, loginUser
// })(LoginForm);
