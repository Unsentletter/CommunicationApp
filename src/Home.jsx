import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi Jacob. How are you feeling today?</Text>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rating => {
          <Button
            title={rating}
            onPress={() => this.props.navigation.navigate('FeelingDescriptionScreen')}
          />;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(Home);
