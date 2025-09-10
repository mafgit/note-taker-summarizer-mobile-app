import { data } from "@/services/cards";
import { useState } from "react";
import { FlatList, View } from "react-native";
import Card from "./Card";
import HomeHeader from "./HomeHeader";
import ThemedText from "./ThemedText";

function Cards() {
  const [cards, setCards] = useState(data);

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return <Card item={item} />;
      }}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", gap: 12 }}
      contentContainerStyle={{ gap: 12 }}
      ListHeaderComponent={<HomeHeader cards={data} setCards={setCards} />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <View style={{ marginTop: 20 }}>
          <ThemedText center>❌ No cards found</ThemedText>
        </View>
      )}
    />
  );
}

export default Cards;
