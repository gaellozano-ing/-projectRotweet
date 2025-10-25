import React, { useState, useEffect } from 'react';
import { View, Alert, Image } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../Components/CustomButton';
import globalStyles, { colors } from '../Styles/GlobalStyles';
import styles from '../Styles/LoginStyles';

export default function LoginScreen({ navigation }) {
  const [User, setUser] = useState('');
  const [Password, setPassword] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = User.trim() !== '' && Password.trim() !== '';
    setFormValid(isValid);
  }, [User, Password]);

  const handleSave = () => {
    if (!formValid) {
      Alert.alert('Error', 'Por favor, complete todos los campos.', [
        { text: 'OK' },
      ]);
      return;
    }

    navigation.navigate('Home');
  };
  return (
    <View style={[globalStyles.container, globalStyles.centered]}>
       <Image
        source={require('../assets/img/gorjeo.png')}
        style={{ width: 120, height: 120, margin: 10}}
        resizeMode="contain"
      />
      
      <Text
        variant="headlineMedium"
        style={[styles.title]}
      >
        Welcome to RotWeet
      </Text>
      <Text
        variant="headlineMedium"
        style={[styles.title, globalStyles.titleText]}
      >
        Login
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          label="User"
          value={User}
          onChangeText={setUser}
          mode="outlined"
          left={<TextInput.Icon icon="at" />}
          style={styles.input}
          theme={{ roundness: 12 }}
        />

        <TextInput
          label="Password"
          value={Password}
          onChangeText={setPassword}
          mode="outlined"
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
          theme={{ roundness: 12 }}
        />
      </View>

      <CustomButton
        icon="login-variant"
        title="Login"
        onPress={handleSave}
        disabled={!formValid}
      />

      <CustomButton
        icon="account-plus"
        title="Don't have an account? Create one"
        mode="text"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}
