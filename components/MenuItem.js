import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MenuItem = ({ title, image, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      className='items-center justify-center space-y-2'
      onPress={handlePress}
    >
      <View
        className={`items-center justify-center p-2 w-20 h-20 shadow-lg rounded-full ${
          type === title.toLowerCase() ? 'bg-gray-300' : ''
        }`}
      >
        <Image source={image} className='w-full h-full object-contain' />
      </View>
      <Text className='text-xl text-blue-400 font-semibold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;
