import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { Text, TextProps } from "react-native";

type Props = TextProps & {
  bold?: boolean;
  semibold?: boolean;
  size?: keyof typeof sizes;
  center?: boolean;
  color?: keyof typeof colors;
};

const ThemedText = ({
  children,
  bold,
  semibold,
  size,
  center,
  color,
  ...props
}: Props) => {
  return (
    <Text
      style={{
        color: color ? colors[color] : colors["foreground"],
        fontFamily: bold ? "Bold" : semibold ? "SemiBold" : "Regular",
        fontSize: size ? sizes[size] : sizes["md"],
        textAlign: center ? "center" : "auto",
        width: "100%",
      }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
