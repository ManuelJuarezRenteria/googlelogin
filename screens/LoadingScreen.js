import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';


class LoadinScreen extends Component {
    componentDidMount() {
        this.checkIfLoggedIn();
        }
        checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(
        function(user) {
        if(user) {
        this.props.navigation.navigate
        ('DashboardScreen');
        }else{
        this.props.navigation.navigate('LoadinScreen');
        }
        }.bind(this)
        );
        };
        
        
        
        };
        
        
export default LoadinScreen;
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}
});