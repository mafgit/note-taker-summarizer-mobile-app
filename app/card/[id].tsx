import Screen from "@/components/Screen";
import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import { radius } from "@/constants/sizes";
import { API_BASE_URL } from "@/env";
import { CardType, data } from "@/services/cards";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import NotFoundScreen from "../+not-found";

const CardPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [item, setItem] = useState<CardType | undefined>(
    data.find((c) => c.id === parseInt(id))
  );

  if (!item) return <NotFoundScreen />;

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginVertical: 12, gap: 12 }}>
          <ThemedText selectable size="xl" semibold>
            {item?.title}
          </ThemedText>
          <ThemedText selectable size="md">
            {item?.body}
          </ThemedText>
        </View>

        <View>
          <ThemedButton
            onPress={async () => {
              try {
                const res = await fetch(API_BASE_URL + "/summarize", {
                  method: "POST",
                  body: JSON.stringify({ text: item?.body }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                });

                const { summary } = await res.json();
                setItem({ ...item, summary });
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <ThemedText color="primaryForeground" center>
              ✨ Summarize
            </ThemedText>
          </ThemedButton>

          {item.summary ? (
            <View
              style={{
                backgroundColor: "#0099ff36",
                paddingHorizontal: 12,
                paddingVertical: 16,
                borderRadius: radius.md,
                marginTop: 12,
                gap: 5,
              }}
            >
              <ThemedText semibold size="md">
                Summary:
              </ThemedText>
              <ThemedText selectable>{item.summary}</ThemedText>
            </View>
          ) : (
            ""
          )}
        </View>
      </ScrollView>
    </Screen>
  );
};

export default CardPage;
