import React, {useEffect} from 'react';

import{View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

import {
GoogleSignin,
GoogleSigninButton,
statusCodes, } from '@react-native-community/google-signin';

const LoginScreen = () => {
useEffect(() => {
    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API 
        webClientId: '941266571188-gqpvf0l3dhokvf5g82lev056qh2q5d3c.apps.googleusercontent.com',
        offlineAccess: true, // if you want to access Google API on behalf of th
        //hostedDomain: '', // specifies a hosted domain restriction
        //loginHint: '', // [iOS] The user's ID, or email address, to be prefill
        forceConsentPrompt: true, // [Android] if you want to show the authoriza
        //accountName: '', // [Android] specifies an account name on the device 
        //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you wan
      });

    }, [])
      _signIn=async()=>{ 
        try{
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log({userInfo})
            } catch (error) {
            console.log({error})
            if (error.code === statusCodes.SIGN_IN_CANCELLED){
            }else if (error.code === statusCodes.IN_PROGRESS){
            }else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            }else {
            }
            }
            };
            return (
                <View style = {styles.container}>
                <Text style={styles.title}>Welcome!</Text>
                <View style={styles.inputContainer}>
                <Input placeholder ="username" />
                <Input placeholder ="password" />
                <TouchableOpacity style = {styles.buttonLogin}>
                <Text style = {styles.textLogin}>Login</Text>
                </TouchableOpacity>
                </View>
                <Text>OR</Text>
                <GoogleSigninButton
style={{width: 192, height: 48}}
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Dark}
onPress={signIn}
disabled={this.state.isSgninInProgress} />

                </View>
                )
                }
            const {width, height } = Dimensions.get("screen")
const styles = StyleSheet.create({
})
export default LoginScreen