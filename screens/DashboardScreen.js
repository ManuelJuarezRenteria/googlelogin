import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';

class DashbaordScreen extends Component {
render() {
return (
<View style={styles.container}>
<Text>DashbaordScreen</Text>
</View>
);
}
}
export default DashbaordScreen;
const styles = StyleSheet.create({
container: {
flex: 1,
alignItems: 'center',
justifyContent: 'center'
}
});
