import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ItemDetails = ({ route }) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  const data = route?.params;
  //   console.log(data?.item?.photo);

  return (
    <SafeAreaView className='mt-8 flex-1 relative bg-white'>
      <ScrollView className='flex-1 px-4 py-6'>
        <View className='relative bg-white shadow-lg'>
          <Image
            className='w-full h-64 object-cover rounded-2xl'
            source={{
              uri: data?.item?.photo?.images?.large?.url
                ? data?.item?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239__340.png'
            }}
          />

          <View className='absolute flex-row top-3 justify-between px-6 inset-x-0 '>
            <TouchableOpacity
              onPress={() => navigation.navigate('Discover')}
              className='w-8 h-8 rounded-md items-center justify-center bg-white'
            >
              <FontAwesome name='chevron-left' size={24} color='skyblue' />
            </TouchableOpacity>
            <TouchableOpacity className='w-8 h-8 rounded-md items-center justify-center bg-blue-400'>
              <FontAwesome5 name='heartbeat' size={24} color='white' />
            </TouchableOpacity>
          </View>

          <View className='absolute flex-row bottom-5 justify-between px-6 inset-x-0'>
            <View className='flex-row items-center space-x-2'>
              <Text className='font-bold text-slate-300 text-[12px]'>
                {data?.item?.price_level}
              </Text>
              <Text className='font-bold text-slate-300 text-[20px]'>
                {' '}
                {data?.item?.price}
              </Text>
            </View>
            {data?.item?.open_now_text ? (
              <View className='rounded-md px-2 py-1 bg-teal-300 mx-2'>
                <Text className='text-[15px]'>{data?.item?.open_now_text}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>

        <View className='mt-8'>
          <Text className='text-purple-900 text-[16px] font-bold'>
            {data?.item?.name}
          </Text>
          <View className='flex-row items-center space-x-2'>
            <FontAwesome name='map-marker' size={18} color='darkgray' />
            <Text className='text-purple-700 text-[13px] font-bold'>
              {data?.item?.location_string}
            </Text>
          </View>
        </View>

        <View className='flex-row justify-between items-center mt-8'>
          {data?.item?.rating && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-10 h-10 bg-red-200 rounded-2xl shadow-md justify-center items-center'>
                <FontAwesome name='star' size={24} color='white' />
              </View>

              <View>
                <Text className='text-purple-900'>{data?.item?.rating}</Text>
                <Text className='text-purple-900'>Ratings</Text>
              </View>
            </View>
          )}

          {data?.item?.price_level && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-10 h-10 bg-red-200 rounded-2xl shadow-md justify-center items-center'>
                <MaterialIcons name='attach-money' size={24} color='black' />
              </View>

              <View>
                <Text className='text-purple-900'>
                  {data?.item?.price_level}
                </Text>
                <Text className='text-purple-900'>Price Level</Text>
              </View>
            </View>
          )}
          {data?.item?.bearing && (
            <View className='flex-row items-center space-x-2'>
              <View className='w-10 h-10 bg-red-200 rounded-2xl shadow-md justify-center items-center'>
                <FontAwesome5 name='map-signs' size={24} color='black' />
              </View>

              <View>
                <Text className='text-purple-900'>{data?.item?.bearing}</Text>
                <Text className='text-purple-900'>Bearings</Text>
              </View>
            </View>
          )}
        </View>

        {data?.item?.description && (
          <Text className='my-4 tracking-wide text-[18px] text-gray-500 font-semibold'>
            {data?.item?.description}
          </Text>
        )}

        {data?.item?.cuisine && (
          <View className='flex-row flex-wrap gap-2 items-center justify-start mt-4'>
            {data?.item?.cuisine?.map((c) => (
              <TouchableOpacity
                key={c?.key}
                className='px-2 py-1 bg-emerald-100 rounded-md'
              >
                <Text>{c?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className='bg-gray-300 mt-4 space-y-2 px-2 py-2 rounded-xl'>
          {data?.item?.phone && (
            <View className='flex-row space-x-2 items-center'>
              <FontAwesome name='phone' size={20} color='darkgreen' />
              <Text className='text-xl'>{data?.item?.phone}</Text>
            </View>
          )}
          {data?.item?.email && (
            <View className='flex-row space-x-2 items-center'>
              <FontAwesome name='envelope' size={20} color='darkgreen' />
              <Text className='text-xl'>{data?.item?.email}</Text>
            </View>
          )}
          {data?.item?.address && (
            <View className='flex-row space-x-2 items-center'>
              <FontAwesome name='map-pin' size={20} color='darkgreen' />
              <Text className='text-xl'>{data?.item?.address}</Text>
            </View>
          )}

          <View className='mt-6 px-4 py-4 rounded-lg bg-blue-400 items-center justify-center mb-6'>
            <Text className='text-3xl font-semibold uppercase tracking-wide text-gray-100'>
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemDetails;
