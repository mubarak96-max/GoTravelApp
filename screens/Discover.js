import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Attractions, Avatar, Hotels, Restaurants } from '../assets';
import MenuItem from '../components/MenuItem';

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('restaurants');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  //   AIzaSyD9qFyd7Hyhit74sQvNWXukKDhUdNXywU8;

  return (
    <SafeAreaView className='mt-8 flex-1 relative'>
      <View className='flex-row justify-between items-center px-8'>
        <View>
          <Text className='text-[36px] text-purple-800 font-bold'>
            Discover
          </Text>
          <Text className='text-[30px] text-slate-600'>the beauty today</Text>
        </View>
        <View className='w-10 h-10 rounded-md justify-center items-center shadow-lg'>
          <Image
            source={Avatar}
            className='w-full h-full object-cover rounded-md'
          />
        </View>
      </View>

      <View className='flex-row items-center mx-4 bg-white rounded-xl py-1 px-4 shadow-lg mt-4'>
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: 'geometry' }}
          fetchDetails={true}
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: 'AIzaSyCZlSMPD2723Lht5diQ-hn4CG7I9R_MWcE',
            language: 'en'
          }}
        />
      </View>

      {/* Menu container */}
      <ScrollView>
        <View className='flex-row items-center justify-center px-8 mt-8'>
          <MenuItem key={'hotels'} title='Hotels' image={Hotels} />
          <MenuItem
            key={'attractions'}
            title='Attractions'
            image={Attractions}
            type={type}
            setType={setType}
          />
          <MenuItem
            key={'restaurants'}
            title='Restaurants'
            image={Restaurants}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Discover;
