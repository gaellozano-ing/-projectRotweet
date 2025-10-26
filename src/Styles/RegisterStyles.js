import { StyleSheet } from 'react-native';
import { colors } from './GlobalStyles';

export default StyleSheet.create({
  icon: {
    marginBottom: 20,
  },
  title: {
    marginBottom: 30,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  formContainer: {
    width: '85%',
    marginBottom: 25,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});
