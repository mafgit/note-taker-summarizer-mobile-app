import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    Regular: require("../assets/fonts/Poppins-Regular.ttf"),
    Bold: require("../assets/fonts/Poppins-Bold.ttf"),
    SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // <ThemeProvider value={DefaultTheme}>
    <>
      <Stack initialRouteName="home">
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
    // </ThemeProvider>
  );
}
