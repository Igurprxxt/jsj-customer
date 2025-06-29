import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import Input from '~/components/UI/Input';
import { useRouter } from 'expo-router';

const SingleMove = () => {
  const router = useRouter();
  const location = {
    coords: {
      accuracy: 5,
      altitude: 0,
      altitudeAccuracy: -1,
      heading: -1,
      latitude: 31.634,
      longitude: 74.8723,
      speed: -1,
    },
    timestamp: 1750676261283.893,
  };

  const referenceData = [
    { label: 'Seal #', value: '--' },
    { label: 'Reference #', value: '--' },
    { label: 'Vessel Name', value: 'MAERSK SEQUOIA' },
    { label: 'Voyage', value: '448S' },
    { label: 'Purchase Order #', value: '--' },
    { label: 'Shipment #', value: '--' },
    { label: 'Pick Up #', value: '11546' },
    { label: 'APT #', value: '--' },
    { label: 'Return #', value: '--' },
    { label: 'Reservation #', value: '745689' },
    { label: 'Genset #', value: '--' },
    { label: 'Cut-Off', value: '02/21/25, 12:00 AM' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="w-full flex-row items-center justify-center border-b border-gray-200 bg-white px-4 py-4 shadow-sm">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="absolute left-4 z-10 p-2">
            <Feather name="arrow-left" size={24} color="#333" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-gray-800">#ELAN_E100894</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="w-full flex-1"
          contentContainerStyle={{ paddingBottom: 20 }}>
          <View className="relative h-72 w-full items-center justify-center bg-gray-300">
            {location && (
              <MapView
                style={{
                  height: '100%',
                  width: '100%',
                }}
                initialRegion={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                showsUserLocation
                followsUserLocation>
                <Marker
                  coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                  }}
                  title="You are here"
                />
              </MapView>
            )}

            <TouchableOpacity
              onPress={() => {}}
              className="absolute bottom-12 left-4 rounded-full bg-white p-2">
              <Text className="text-lg text-gray-700">↻</Text>
            </TouchableOpacity>

            <View className="absolute bottom-12 right-4 flex-row items-center rounded-full bg-white px-3 py-1">
              <Text className="mr-1 text-base text-gray-700">📍</Text>
              <Text className="text-base font-medium text-gray-800">14.24 mi</Text>
            </View>
          </View>

          <View className="mx-4 -mt-10 overflow-hidden rounded-xl bg-white">
            <View className="border-b border-gray-200 px-5 py-4">
              <View className="mb-2 flex-row items-center justify-between">
                <Text className="rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold uppercase text-gray-700">
                  DROP CONTAINER
                </Text>
                <Text className="text-sm text-gray-600">02/20/25 07:30 AM - 07:30 AM</Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">APM TERMINAL</Text>
                <Text className="text-sm text-gray-500">
                  2500 Navy Way, San Pedro, CA 90731, USA
                </Text>
              </View>
            </View>

            <View className="border-b border-gray-200 px-5 py-4">
              <View className="self-start">
                <Text className="rounded-md bg-gray-100 px-2 py-1 text-sm font-semibold uppercase text-gray-700">
                  DROP CONTAINER
                </Text>
              </View>
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">MY YARD - COMPTON</Text>
                <Text className="text-sm text-gray-500">2988 E Ana St, Compton, CA 90221, US</Text>
              </View>
            </View>

            <View className="border-b border-gray-200 px-5 py-4">
              <View className="mb-3">
                <Text className="text-base text-gray-700">Chassis #</Text>
                <Input className="bg-gray-50" placeholder="eg. METZ123456" />
              </View>
              <View className="mb-3">
                <Text className="text-base text-gray-700">Container #</Text>
                <Input className="bg-gray-50" placeholder="eg. TGHU1234567" />
              </View>
              <View>
                <Text className="text-base text-gray-700">Seal #</Text>
                <Input className="bg-gray-50" placeholder="eg. 123456" />
              </View>
            </View>

            <View className="px-5 py-4">
              <View className="mb-4 flex-row items-center justify-between">
                <Text className="text-base font-semibold uppercase text-gray-700">Load Info</Text>
                <Text className="text-base font-medium text-gray-800">EXPORT</Text>
              </View>

              <View className="mb-2 flex-row justify-between">
                <View className="w-1/2 pr-2">
                  <Text className="text-xs uppercase text-gray-500">Load #</Text>
                  <Text className="text-base font-medium text-gray-800">ELAN_E100894</Text>
                </View>
                <View className="w-1/2 pl-2">
                  <Text className="text-xs uppercase text-gray-500">SCAC</Text>
                  <Text className="text-base font-medium text-gray-800">345AASA</Text>
                </View>
              </View>

              <View className="flex-row justify-between">
                <View className="w-1/2 pr-2">
                  <Text className="text-xs uppercase text-gray-500">Bill of Lading</Text>
                  <Text className="text-base font-medium text-gray-800">2323</Text>
                </View>
                <View className="w-1/2 pl-2">
                  <Text className="text-xs uppercase text-gray-500">Booking #</Text>
                  <Text className="text-base font-medium text-gray-800">246110478</Text>
                </View>
              </View>
            </View>
            <View className="mx-4 mt-4 rounded-xl bg-white">
              <Text className="mb-3 text-lg font-semibold uppercase text-gray-800">
                Reference Numbers
              </Text>
              {referenceData.map((item, index) => (
                <View
                  key={index}
                  className="flex-row items-center justify-between border-b border-gray-100 py-2 last:border-b-0">
                  <Text className="text-sm text-gray-500">{item.label}</Text>
                  <Text className="text-sm font-medium text-gray-800">{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        <View className="w-full flex-row justify-around border-t border-gray-200 bg-white p-4">
          <TouchableOpacity
            onPress={() => {}}
            className="mr-2 items-center justify-center rounded-lg bg-gray-600 px-8 py-3">
            <Text className="text-lg font-bold text-white">Reject</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="ml-2 flex-1 items-center justify-center rounded-lg bg-green-600 py-3">
            <Text className="text-lg font-bold text-white">Accept Move</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingleMove;
