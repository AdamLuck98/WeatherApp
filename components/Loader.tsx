import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/colors';

type Props = {};

const Loader = (props: Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={Colors.NAV_BACKGROUND} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
