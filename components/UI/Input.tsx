import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';

interface InputProps {
  label: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  isSecure?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
  isSecure = false,
}) => {
  return (
    <View style={styles.input}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        secureTextEntry={isSecure}
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={'#929292'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 16,
  },
  inputText: {
    borderWidth: 1,
    fontSize: 16,
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
    fontWeight: '400',
    color: '#222',
    height: 44,
  },
});

export default Input;
