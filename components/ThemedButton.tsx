import { colors } from "@/constants/colors";
import { radius } from "@/constants/sizes";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

const ThemedButton = ({ children, ...props }: Props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.primary,
        padding: 12,
        borderRadius: radius.md,
      }}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

export default ThemedButton;
