import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetails = props => {
  const { title, artist, url, image, thumbnail_image } = props.album;
  return (
    <View>
      <Text>{title}</Text>
      <Text>{artist}</Text>
    </View>
  );
};

export default AlbumDetails;
