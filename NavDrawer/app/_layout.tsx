import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" 
      options={{
        drawerLabel: "Login",
        title: "Faça Login",
      }}
    />
    <Drawer.Screen
      name="User"
      options={{
        drawerLabel: "User",
        title: "Bem vindo(a)",
      }}
    />
     <Drawer.Screen
      name="TelaA"
      options={{
        drawerLabel: "TelaA",
        title: "tela A",
        drawerItemStyle: { height: 0 },
      }}
    />
     <Drawer.Screen
      name="TelaB"
      options={{
        drawerLabel: "TelaB",
        title: "tela B",
        drawerItemStyle: { height: 0 },
      }}
    />
  </Drawer>
  
  );
}