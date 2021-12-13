import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

function App() {
  return (
    <NavigationContainer>
      <ScrollView style={styles.container}>
        <MyStatusBar translucent></MyStatusBar>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon size={23} name="bars" color="black"></Icon>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Icon size={23} name="search" color="black"></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.homeTitleContainer}>
          <Text style={styles.homeTitle}>Week in Jakarta</Text>
          <Text style={styles.homeTitleDesc}>2021 Car show in Jakarta</Text>
        </View>
        <View style={styles.exploreContainer}>
          <View style={styles.exploreHeader}>
            <Text style={styles.exploreTitle}>Explore</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon size={23} name="filter" color="#989898"></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.exploreBar}>
            <TouchableOpacity>
              <Text style={styles.exporeBarText}>Recommended</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.exporeBarText}>New Models</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.exporeBarText}>2020 Shows</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.exploreList}>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-1.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>BMW M4 2016</Text>
              <Text style={styles.exploreSecondText}>
                Rafael Alviano Dafito
              </Text>
            </View>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-2.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>BMW 530i 2021</Text>
              <Text style={styles.exploreSecondText}>Mas Otot</Text>
            </View>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-3.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>BMW i8 2018</Text>
              <Text style={styles.exploreSecondText}>Muhammad Axel</Text>
            </View>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-4.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>Ferrari SF90 Stradale</Text>
              <Text style={styles.exploreSecondText}>Dimas Palaguna</Text>
            </View>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-5.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>Mercedes AMG GT</Text>
              <Text style={styles.exploreSecondText}>Wahyu Thamrin</Text>
            </View>
            <View style={styles.exploreItem}>
              <TouchableOpacity>
                <View style={styles.exploreCard}>
                  <Image
                    style={styles.exploreImage}
                    source={require('./src/assets/images/car-6.jpeg')}
                    resizeMode="cover"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.exploreFirstText}>Lamborghini Huracan</Text>
              <Text style={styles.exploreSecondText}>Mr.Maze</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </NavigationContainer>
  );
}

EStyleSheet.build({
  $rem: widthScreen > 340 ? 18 : 16,
});

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: '1rem',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  header: {
    width: '100%',
    padding: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeTitleContainer: {
    width: '100%',
    marginTop: '2.5rem',
  },
  homeTitle: {
    fontSize: '1.75rem',
    fontWeight: '900',
  },
  homeTitleDesc: {
    color: 'black',
    marginTop: '0.35rem',
    fontWeight: '400',
  },
  exploreContainer: {
    marginTop: '1.25rem',
    width: '100%',
  },
  exploreHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  exploreTitle: {
    fontSize: '1.25rem',
    fontWeight: '900',
  },
  exploreBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '0.75rem',
  },
  exporeBarText: {
    color: 'black',
    fontWeight: '500',
  },
  exploreList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingBottom: '1rem',
  },
  exploreItem: {
    width: '47%',
    marginTop: '1.5rem',
  },
  exploreCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 3,
    borderRadius: 10,
  },
  exploreImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  exploreFirstText: {
    marginTop: '0.5rem',
    fontSize: '0.825rem',
    fontWeight: '600',
    color: 'black',
  },
  exploreSecondText: {
    marginTop: '0.3rem',
    color: 'black',
    fontWeight: '400',
  },
});

export default App;
