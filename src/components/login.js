import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { StackActions } from '@react-navigation/native';
import { onInputText, onUserEnter, userEnterCheck } from '../redux/actions';

class Login extends Component {

    // // ==================== Function and Components ======================================================== // //

    componentDidMount() {
        this.props.userEnterCheck();
    }

    componentDidUpdate() {
        if (this.props.user.username) {
            this.props.navigation.dispatch(StackActions.replace('Tab'));
        }
    }

    onBtnEnterPress = () => {
        this.props.onUserEnter(this.props.login)
    }

    // // ==================== Render Akhir =============================================================== // //

    render() {
        if (this.props.user.authChecked && !this.props.user.username) {
            return (
                <View style={styles.containerStyle}>
                    <Text h2 style={{ color: 'pink' }}>Login</Text>
                    <Icon
                        name='cookie'
                        size={80}
                        type='material-community'
                        color='pink'
                    />
                    <View style={styles.inputContainerStyle}>
                        <Input
                            placeholder='Your Name'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    type='feather'
                                    color='pink'
                                />
                            }
                            // value={this.props.login.username}
                            onChangeText={(val) => this.props.onInputText('username', val)}
                        />
                    </View>
                    <Text style={{ color: 'red' }}>
                        {/* {this.props.login.error} */}
                    </Text>
                    <Button
                        title="Enter"
                        containerStyle={{ width: '95%', marginBottom: 10 }}
                        buttonStyle={{ backgroundColor: 'pink', color: 'white' }}
                        onPress={this.onBtnEnterPress}
                    // loading={this.props.login.loading}
                    />
                </View>
            )
        }

        return (
            <View style={styles.containerSplashStyle}>
                <Text h3 style={{ color: 'white' }}>Login</Text>
                <Icon
                    name='cookie'
                    size={80}
                    type='material-community'
                    color='white'
                />
            </View>
        )
    }
}

// // ==================== Styles ===================================================================== // //

const styles = StyleSheet.create({
    containerSplashStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    inputContainerStyle: {
        marginTop: 70,
        marginBottom: 70,
        width: '100%'
    }
})

const mapStateToProps = ({ user, login }) => {
    return { user, login }
}

export default connect(mapStateToProps, {
    onInputText,
    onUserEnter,
    userEnterCheck
})(Login);