/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { DrawerActions } from 'react-navigation';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as EventActions } from '../../store/ducks/events';

import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({ navigation, tintColor }) => (
  <TouchableOpacity
    onPress={() => {
      navigation.dispatch(DrawerActions.openDrawer());
    }}
  >
    <Icon name="bars" size={20} color={tintColor} style={{ paddingLeft: 24 }} />
  </TouchableOpacity>
);

class Events extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Eventos',
    headerLeft: <TabIcon navigation={navigation} />,
    drawerLabel: 'EventList',
  });

  componentDidMount() {
    const { events, users, eventRequest } = this.props;
    eventRequest(users.token);
  }

  render() {
    const { events } = this.props;
    return (
      <View>
        <Text>{JSON.stringify(events.data)}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  events: state.events,
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...EventActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
