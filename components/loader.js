import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchLoader from './searchLoader';

export default function Loader() {
  return (
    <View style={styles.container}>
          <SearchLoader/>
        <Text>
            Loading...
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
