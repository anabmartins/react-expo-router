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
        name="usuario"
        options={{
          href: 'usuario',
        }}
      />
      <Tabs.Screen
        name="telaA"
        options={{
          href: null,
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