import { colors } from "@/constants/colors";
import { radius, sizes } from "@/constants/sizes";
import { CardType } from "@/services/cards";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import ThemedButton from "./ThemedButton";
import ThemedText from "./ThemedText";

let timeout: number | undefined;

const HomeHeader = ({
  cards,
  setCards,
}: {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}) => {
  return (
    <View style={{ marginBottom: 2 }}>
      <ThemedText semibold size="xl" center>
        📋 Basic Note Taker
      </ThemedText>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search any note"
          style={styles.input}
          onChangeText={(text) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              setCards(
                cards.filter(
                  (c) =>
                    c.title.toLowerCase().includes(text.toLowerCase()) ||
                    c.body.toLowerCase().includes(text.toLowerCase())
                )
              );
            }, 500);
          }}
        />

        <ThemedButton>
          <ThemedText color="primaryForeground">Create</ThemedText>
        </ThemedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.light,
    padding: 16,
    flex: 1,
    borderRadius: radius.md,
    fontSize: sizes.md,
  },
  inputContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});

export default HomeHeader;
