import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import { getHomeListPost } from '../redux/actions';
import IconList from './iconList';
import RestaurantList from './restaurantList';

// // ==================== component dan function ===================================================================== // //

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeListPost()
    }

    // // ==================== render akhir ======================================================================= // //

    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    rightComponent={{
                        text: `Welcome,${this.props.user.username}`,
                        style: { color: 'grey', fontSize: 18, fontWeight: '700' }
                    }}
                    leftComponent={{
                        icon: 'ticket-alt',
                        color: 'white',
                        type: 'font-awesome'
                    }}
                    containerStyle={{
                        backgroundColor: 'pink',
                        justifyContent: 'space-around',
                        elevation: 2,
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 10
                }}>
                    <IconList icons={'cc-amazon-pay'} types={'font-awesome'} name={'Credit'} />
                    <IconList icons={'utensils'} types={'font-awesome'} name={'Variant'} />
                    <IconList icons={'book-open'} types={'font-awesome'} name={'Recipe'} />
                    <IconList icons={'search-location'} types={'font-awesome'} name={'Location'} />
                    <IconList icons={'shopping-cart'} types={'font-awesome'} name={'Cart'} />
                    <IconList icons={'pizza-slice'} types={'font-awesome'} name={'Pizza'} />
                    <IconList icons={'hamburger'} types={'font-awesome'} name={'Burger'} />
                    <IconList icons={'ellipsis-h'} types={'font-awesome'} name={'More'} />
                </View>
                <FlatList
                    data={this.props.homeListPost.listPost}
                    renderItem={({ item }) => (
                        <View style={{ width: '50%' }}>
                            <RestaurantList data={item} />
                        </View>
                    )}
                    keyExtractor={item => item.restaurant.name}
                    style={{ width: '98%' }}
                    numColumns={2}
                    onRefresh={() => this.props.getHomeListPost()}
                    refreshing={this.props.homeListPost.loading}
                />
            </View>
        )
    }
}

// // ==================== styles ========================================================================= // //

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})

// // ==================== map ======================================================================= // //

const mapStateToProps = ({ homeListPost, user }) => {
    return {
        homeListPost,
        user
    }
}

export default connect(mapStateToProps, { getHomeListPost })(Home);