import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';

import StudentHome from './pages/StudentHome';
import TeacherHome from './pages/TeacherHome';

import StudentDetail from './pages/StudentDetail';
import TeacherEditDetail from './pages/TeacherEditDetail';

import NewClass from './pages/NewClass';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="StudentHome" component={StudentHome}/>
        <AppStack.Screen name="StudentDetail" component={StudentDetail}/>
        <AppStack.Screen name="TeacherHome" component={TeacherHome}/>
        <AppStack.Screen name="TeacherEditDetail" component={TeacherEditDetail}/>
        <AppStack.Screen name="NewClass" component={NewClass}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}