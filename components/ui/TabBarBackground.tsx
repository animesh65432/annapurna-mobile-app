// This is a shim for web and Android where the tab bar is generally opaque.
export default undefined;

export function useBottomTabOverflow() {
  return 0;
}
import React from 'react';
import { Platform, View } from 'react-native';

export function TabBarBackground() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        position: Platform.OS === 'ios' ? 'absolute' : 'relative',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
}