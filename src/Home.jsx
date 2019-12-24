import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const Home = props => {
  const navigateToNextPage = rating => {
    if (rating < 6) {
      props.navigation.navigate('DescribeFeelingsScreen');
      return;
    }

    props.navigation.navigate('FeelingDescriptionScreen');
  };

  return (
    <View style={styles.container}>
      <Text>Hi Jacob. How are you feeling today?</Text>
      <RatingWrapper>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(rating => {
          return (
            <Button
              title={rating.toString()}
              key={rating}
              onPress={() => {
                navigateToNextPage(rating);
              }}
            />
          );
        })}
      </RatingWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const RatingWrapper = styled.View`
  flex-direction: row;
`;

const mapStateToProps = state => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(Home);
