import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Screen;
