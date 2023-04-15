import { useState } from 'react'
import { View, Text, TouchableOpacity, Flatlist, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { FlatList } from 'react-native-gesture-handler';


const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false; 
  const error = false;


  return (
    <View
      style={styles.container}
    >
      <View 
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View 
        style={styles.cardsContainer}
      >
        {isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ): error ? (
          <Text>Somethin went wrong</Text>
        ): (
          <FlatList />
        )}

      </View>
    </View>
  )
}

export default Popularjobs