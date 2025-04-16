import "@expo/metro-runtime";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { I18nextProvider } from "react-i18next";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Toaster } from "react-hot-toast";
import Header from "@/pages/app-header/Header";
import Login from "@/pages/app-body/login/Login";
import i18n from "@/i18n/i18n-config";
import { EXPO_BACKEND_API_URL } from "@/config/environment";
import { navigateRef } from "@/navigation/navigationRef";
import { UserProvider } from "@/contexts/UserContext";
import Dashboard from "@/pages/app-body/dashboard/Dashboard";
import useUserContext from "@/hooks/useUserContext";
import Signup from "@/pages/app-body/signup/Signup";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <PaperProvider>
        <I18nextProvider i18n={i18n}>
          <AppContent />
        </I18nextProvider>
      </PaperProvider>
    </UserProvider>
  );
};

const AppContent = () => {
  const { isAuthenticated } = useUserContext();
  const NavigationContainerTheme = {
    colors: {
      background: "#FFF",
    },
  };

  const linking = {
    prefixes: [EXPO_BACKEND_API_URL],
    config: {
      screens: {
        "login": "rc-worker/",
        "signup": "rc-worker/signup",
        "dashboard": "rc-worker/dashboard"
      },
    },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <NavigationContainer theme={NavigationContainerTheme} linking={linking} ref={navigateRef}>
        {isAuthenticated && <Header />}
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={"login"}>
                <Stack.Screen name="login" component={Login} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="dashboard" component={Dashboard} />
              </Stack.Navigator>
            </View>
          </View>
      </NavigationContainer>
      <Toaster />
    </SafeAreaView>
  );
};

export default App;
