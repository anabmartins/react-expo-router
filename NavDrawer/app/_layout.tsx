import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          href: '/',
        }}
      />
      <Tabs.Screen
        name="telaA"
        options={{
          href: 'telaA',
        }}
      />
      <Tabs.Screen
        name="telaB"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}