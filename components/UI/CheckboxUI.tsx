import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import Checkbox from 'expo-checkbox';

interface CheckboxUIProps {
  text: string;
  isChecked: boolean;
  onHandleCheck: () => void;
}

const CheckboxUI: React.FC<CheckboxUIProps> = ({
  text,
  isChecked,
  onHandleCheck,
}) => {
  return (
    <Pressable style={styles.checkboxContainer} onPress={onHandleCheck}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={onHandleCheck}
      />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginStart: 8,
  },
  checkbox: {
    marginRight: 8,
    borderColor: '#e0e0e0',
  },
  text: {
    fontSize: 16,
  },
});

export default CheckboxUI;
