import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';

import StudentLesson from './pages/StudentLesson';
import TeacherLesson from './pages/TeacherLesson';

import StudentDetail from './pages/StudentDetail';
import TeacherDetail from './pages/TeacherDetail';

import NewLesson from './pages/NewLesson';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="StudentLesson" component={StudentLesson}/>
        <AppStack.Screen name="StudentDetail" component={StudentDetail}/>
        <AppStack.Screen name="TeacherLesson" component={TeacherLesson}/>
        <AppStack.Screen name="TeacherDetail" component={TeacherDetail}/>
        <AppStack.Screen name="NewLesson" component={NewLesson}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}