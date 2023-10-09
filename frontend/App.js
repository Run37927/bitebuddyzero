import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserAccount from './screens/UserAccount';
import RestaurantDetails from './screens/RestaurantDetails';
import HomePage from './screens/HomePage';
import ChatPage from './screens/ChatPage';
import RequestPage from './screens/RequestPage';
import SignInScreen from './screens/SignInScreen';
import BuddyProfile from './screens/BuddyProfile';
import BuddyConfirmModal from './screens/BuddyConfirmModal';
import MessageScreen from './screens/Message';
import useAuth, { AuthProvider } from './hooks/useAuth';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function RestaurantOverview() {
  return <BottomTabs.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: { backgroundColor: '#f9f9f9' },
    tabBarActiveTintColor: '#FFA500',
    tabBarInactiveTintColor: '#a6a6a6',
  }}>
    <BottomTabs.Screen name="HomePage" component={HomePage} options={{
      title: 'Home',
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
    }} />
    <BottomTabs.Screen name="ChatPage" component={ChatPage} options={{
      title: 'Chats',
      tabBarLabel: 'Chats',
      tabBarIcon: ({ color, size }) => <Ionicons name="chatbubbles" size={size} color={color} />
    }} />
    <BottomTabs.Screen name="RequestPage" component={RequestPage} options={{
      title: 'Eats',
      tabBarLabel: 'Eats',
      tabBarIcon: ({ color, size }) => <Ionicons name="heart" size={size} color={color} />
    }} />
    <BottomTabs.Screen name="UserAccount" component={UserAccount} options={{
      title: 'Account',
      tabBarLabel: 'Account',
      tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />
    }} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </NavigationContainer>
    </>
  )
}

function AppContent() {
  const { user } = useAuth();
  console.log("AppContent re-render: ", user);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      {user ? (
        <>
          <Stack.Group>
            <Stack.Screen name="RestaurantOverview" component={RestaurantOverview} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
            <Stack.Screen name="BuddyProfile" component={BuddyProfile} />
            <Stack.Screen name="Message" component={MessageScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="BuddyConfirmModal" component={BuddyConfirmModal} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      )}
    </Stack.Navigator>
  )
}