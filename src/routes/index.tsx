import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./app.tabs";

export function Routes(){
  return(
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  )
}