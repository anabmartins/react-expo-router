import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" 
        options={{
        drawerLabel: "Home",
        title: "Principal",
      }}
    />
    <Drawer.Screen
      name="telaA" 
      options={{
        drawerLabel: "Tela A",
        title: "bem vindo tela A",
      }}
    />
    <Drawer.Screen
      name="telaB" 
      options={{
        drawerLabel: "Tela B",
        title: "bem vindo tela B",
      }}
    />
  </Drawer>
  );
}