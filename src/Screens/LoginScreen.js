import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../Components/CustomButton';
import globalStyles, { colors } from '../Styles/GlobalStyles';
import styles from '../Styles/LoginStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[globalStyles.container, globalStyles.centered]}>
      <Icon name="twitter" size={80} color={colors.primary} style={styles.icon} />

      <Text variant="headlineMedium" style={[styles.title, globalStyles.titleText]}>
        Iniciar sesión
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          left={<TextInput.Icon icon="email" />}
          style={styles.input}
          theme={{ roundness: 12 }}
        />

        <TextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
          theme={{ roundness: 12 }}
        />
      </View>

      <CustomButton
        title="Entrar"
        onPress={() => navigation.navigate('Home')}
      />

      <CustomButton
        title="¿No tienes cuenta? Crear una"
        mode="text"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
