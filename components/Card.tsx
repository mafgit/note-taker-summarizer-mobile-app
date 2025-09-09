import { colors } from "@/constants/colors";
import { radius } from "@/constants/sizes";
import { CardType } from "@/services/cards";
import { TouchableOpacity } from "react-native";
import ThemedText from "./ThemedText";

const Card = ({ item }: { item: CardType }) => {
  return (
    <TouchableOpacity style={{ padding: 12, backgroundColor: colors.card, borderRadius: radius.md, flex: 1 }}>
      <ThemedText semibold>{item.title}</ThemedText>
      <ThemedText numberOfLines={2} size='sm'>{item.body}</ThemedText>
    </TouchableOpacity>
  );
};

export default Card;
