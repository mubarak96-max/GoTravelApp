import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ItemCard = ({ title, location, image, item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemDetails', { item })}
      className='w-[160px] rounded-md px-2 py-1 shadow-lg bg-white'
    >
      <Image
        source={{ uri: image }}
        className='w-full h-28 object-cover rounded-md'
      />

      {title ? (
        <>
          <Text className='text-purple-900 text-[16px] font-bold'>
            {title?.length > 14 ? `${title.slice(0, 14)}...` : title}
          </Text>

          <View className='flex-row items-center space-x-2'>
            <FontAwesome name='map-marker' size={18} color='darkgray' />
            <Text className='text-purple-700 text-[13px] font-bold'>
              {location?.length > 14 ? `${location.slice(0, 14)}...` : location}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}
    </TouchableOpacity>
  );
};

export default ItemCard;
