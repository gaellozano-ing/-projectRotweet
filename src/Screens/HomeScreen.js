import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Styles/HomeStyles';
import globalStyles, { colors } from '../Styles/GlobalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="twitter" size={60} color={colors.primary} style={styles.icon} />
      <Text variant="headlineMedium" style={[styles.title, globalStyles.titleText]}>
        ¡Bienvenido a X!
      </Text>
      <Text style={[styles.subtitle, globalStyles.paragraph]}>
        Aquí verías tu feed, publicaciones y más.
      </Text>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Login')}
        style={[styles.button, globalStyles.roundedButton]}
      >
        Cerrar sesión
      </Button>
    </View>
  );
}
