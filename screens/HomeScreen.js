import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { HeroImage } from '../assets';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  return (
    <SafeAreaView className='mt-8 flex-1 relative'>
      {/* first section */}

      <View className='flex-row px-6 mt-8 space-x-2 items-center'>
        <View className='w-16 h-16 bg-black items-center justify-center rounded-full'>
          <Text className='text-blue-300 text-3xl font-semibold'>Go</Text>
        </View>
        <Text className='text-3xl font-semibold text-purple-900'>Travel</Text>
      </View>

      {/* second section */}
      <View className='px-6 mt-8 space-y-1'>
        <Text className='text-[34px] text-blue-800'>Enjoy the trip with</Text>
        <Text className='text-[30px] font-bold text-blue-400'>
          Good Moments
        </Text>
        <Text className='text-base text-blue-900'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          laboriosam velit commodi
        </Text>
      </View>

      {/* circle section */}
      <View className='w-[280px] h-[280px] bg-blue-400 rounded-full absolute bottom-20 -right-36'></View>
      <View className='w-[280px] h-[280px] bg-orange-400 rounded-full absolute bottom-7 -left-36'></View>

      {/* Image */}
      <View className='flex-1 relative justify-center items-center mt-3'>
        <Animatable.Image
          animation='fadeIn'
          easing='ease-in-out'
          source={HeroImage}
          className='w-full h-full object-cover'
        />

        <View className='absolute bottom-14 w-20 h-20 border-l-2 border-r-2 border-t-4 border-blue-400 rounded-full justify-center items-center'>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
            <Animatable.View
              animation='pulse'
              easing='ease-in-out'
              iterationCount='infinite'
              className='w-16 h-16 bg-blue-400 justify-center items-center rounded-full'
            >
              <Text className='text-gray-100 text-[30px] font-bold'>Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
