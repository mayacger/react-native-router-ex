import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

const propTypes = {
  data: PropTypes.any,
  navigate: PropTypes.object,
  dispatch: PropTypes.func,
};

let Home = (props) => {
  let push = () => props.dispatch(props.navigate.push('page', { title: 'Pushed from home tab', data: 'Some data from the home tab', parent: 'home' }));
  let modalHorizontal = () => props.dispatch(props.navigate.modal('login', { direction: 'horizontal', data: 'Some data from the home tab' }));

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Home Page</Text>
      <TouchableOpacity style={{ marginBottom: 10 }} onPress={push}>
        <View style={{ backgroundColor: 'rgba(0, 0, 255, 0.6)' }}>
          <Text style={{ padding: 20 }}>Push Page</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginBottom: 10 }} onPress={modalHorizontal}>
        <View style={{ backgroundColor: 'rgba(0, 0, 255, 0.6)' }}>
          <Text style={{ padding: 20 }}>Horizontal Modal</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

Home.propTypes = propTypes;

export default connect((state) => ({ navState: state.navState }))(Home);
