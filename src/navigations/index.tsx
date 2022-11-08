import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tab.navigation";
import DrawerNavigation from "./drawer.navigation";

export default function Navigation() {

  return (
    <NavigationContainer>
       <TabNavigation /> 
    </NavigationContainer>
  );
}