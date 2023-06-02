# react-expo-router
projeto utilizando Tabs e outro projeto utilizando Drawer

### Hide: 
Drawer: drawerItemStyle: { height: 0 }
Tabs: href:'null',

## Nav Tab
babel.config.js

```tsx
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [require.resolve("expo-router/babel")],
  };
};
```

_layout.tsx

```tsx
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
```

## Nav Drawer

`npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated`

babel.config.js

```jsx
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      'react-native-reanimated/plugin',
      require.resolve("expo-router/babel")],
  };
};
```

_layout.tsx

```tsx
import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "overview",
      }}
    />
    <Drawer.Screen
      name="user/[id]" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "User",
        title: "overview",
      }}
    />
  </Drawer>
  );
}
```

**Para rodar web:**

`npm install react-native-reanimated`

babel.config.js:

```tsx
module.exports = {
presets: [
...
],
plugins: [
...
'@babel/plugin-proposal-export-namespace-from',
'react-native-reanimated/plugin',
],
};
```
