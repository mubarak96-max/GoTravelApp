import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from '../assets';
import MenuItem from '../components/MenuItem';
import { FontAwesome } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';
import { getData } from '../api';

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState('restaurants');
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, []);

  useEffect(() => {
    setisLoading(true);
    getData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      //   console.log(data);
      setData(data);
      setInterval(() => {
        setisLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  //   AIzaSyD9qFyd7Hyhit74sQvNWXukKDhUdNXywU8;

  return (
    <SafeAreaView className='mt-8 flex-1 relative bg-white'>
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
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: 'AIzaSyCZlSMPD2723Lht5diQ-hn4CG7I9R_MWcE',
            language: 'en'
          }}
        />
      </View>

      {/* Menu container */}
      {isLoading ? (
        <View className='flex-1 items-center justify-center'>
          <ActivityIndicator size='large' color='purple' />
        </View>
      ) : (
        <ScrollView>
          <View className='flex-row items-center justify-between px-8 mt-8'>
            <MenuItem
              key={'hotels'}
              title='Hotels'
              image={Hotels}
              type={type}
              setType={setType}
            />
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
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className='flex-row items-center justify-between mt-8 px-4'>
              <Text className='text-purple-900 text-[26px] font-bold'>
                Top Tips
              </Text>
              <TouchableOpacity className='flex-row items-center space-x-2'>
                <Text className='text-blue-400 text-[18px] font-bold'>
                  Explore
                </Text>
                <FontAwesome
                  name='long-arrow-right'
                  size={24}
                  color='darkblue'
                />
              </TouchableOpacity>
            </View>
          </View>
          {data?.length > 0 ? (
            <View className='flex-row flex-wrap items-center justify-evenly mt-8 px-2'>
              {data?.map((item, index) => (
                <ItemCard
                  key={index}
                  image={
                    item?.photo?.images?.medium?.url
                      ? item?.photo?.images?.medium?.url
                      : 'https://cdn.pixabay.com/photo/2016/05/26/14/11/chef-1417239__340.png'
                  }
                  title={item?.name}
                  location={item?.location_string}
                  item={item}
                />
              ))}
            </View>
          ) : (
            <View className='items-center justify-center w-full h-[400px] space-y-8'>
              <Image source={NotFound} className='w-32 h-32' />
              <Text className='text-2xl text-purple-900 font-semibold'>
                Oops... No data found !
              </Text>
            </View>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
