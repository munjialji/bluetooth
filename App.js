import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CircularProgress } from 'react-native-svg-circular-progress';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* 상단 부분 */}
        <View style={{ height: 50, flexDirection: 'row', backgroundColor: 'skyblue' }}>
          <TouchableOpacity>
            <EntypoIcon
              name="menu"
              color="black"
              size={30}
              onPress={() => alert('This is menu button')}
              style={{ margin: 10 }}>
            </EntypoIcon>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, margin: 10 }}>현재 내 위치의 미세먼지 농도는?</Text>
        </View>

        {/* 중간 부분의 시간 */}
        <View style={{ marginTop: 30, justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, paddingRight: 10 }}>2019년 05월 19일 PM 09:00</Text>
          <TouchableOpacity>
            <AntDesignIcon
              name="reload1"
              color='black'
              backgroundColor='transparent'
              size={20}
              onPress={() => alert('This is reload button')}>
            </AntDesignIcon>
          </TouchableOpacity>
        </View>

        {/* 중간 부분의 주소 */}
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <MaterialIcon
            name="gps-fixed"
            color='black'
            backgroundColor='transparent'
            size={27}>
          </MaterialIcon>
          <Text style={{ fontWeight: 'bold', fontSize: 17 }}> 경기도 화성시 반송동</Text>
        </View>

        {/* 중간 부분의 미세먼지*/}
        <View>
          <View style={{ marginTop: 30, marginLeft: 100, width: 200, borderRadius: 50, backgroundColor: 'skyblue' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center' }}>미세먼지(PM10)</Text>
          </View>
          <View style={{ marginTop: 30, marginLeft: 100 }}>
            <CircularProgress
              size={200}
              progressWidth={70}
              percentage={165 / 2}
              donutColor={'red'}
            >
              <Text style={{ fontSize: 30 }}>165</Text>
              <Text style={{ fontSize: 30 }}>나쁨</Text>
            </CircularProgress>
          </View>
        </View>


        {/* 하단 부분 */}
        <View style={{ marginTop: 30, marginLeft:60, borderColor: 'black', borderWidth: 2, width: 300 }}>
          <View style={{  justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: 20 }}>WHO기준</Text>
            <TouchableOpacity>
              <MaterialCommunityIcon
                name='information-outline'
                size={25}
                onPress={() => alert('this is info button')}>
              </MaterialCommunityIcon>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20}}>
            <Text style={{ fontSize: 20 }}>미세먼지 PM 10</Text>
          </View>
          <View style={{ marginTop: 20}}>
            <Text style={{ fontSize: 20 }}>초미세먼지 PM 2.5</Text>
          </View>
          <View style={{ marginTop: 20}}>
            <Text style={{ fontSize: 20 }}>극초미세먼지 PM 1.0</Text>
          </View>
        </View>
      </View>
    )
  }
}