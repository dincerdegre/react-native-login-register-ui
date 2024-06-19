import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from './UI/Input';
import CheckboxUI from './UI/CheckboxUI';

const Register = () => {
  const [form, setForm] = useState({
    nameSurname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    confirmBox: false,
  });
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Create An Account</Text>
          <Text style={styles.subtitle}>
            Create an account and access to App
          </Text>
        </View>
        <View style={styles.form}>
          <Input
            label={'Name & Surname'}
            value={form.nameSurname}
            placeholder={'Enter your Name & Surname'}
            onChangeText={(nameSurname: any) => {
              setForm({...form, nameSurname});
            }}
          />
          <Input
            label={'Email Address'}
            value={form.email}
            placeholder={'Enter your Email Address'}
            onChangeText={(email: any) => {
              setForm({...form, email});
            }}
          />
          <Input
            label={'Password'}
            isSecure={true}
            value={form.password}
            placeholder={'********'}
            onChangeText={(password: string) => {
              setForm({...form, password});
            }}
          />
          <Input
            label={'Password Confirm'}
            isSecure={true}
            value={form.password}
            placeholder={'********'}
            onChangeText={(passwordConfirm: string) => {
              setForm({...form, passwordConfirm});
            }}
          />
          <CheckboxUI
            text={'I accept the terms and conditions'}
            isChecked={form.confirmBox}
            onHandleCheck={() => {
              setForm({...form, confirmBox: !form.confirmBox});
            }}
          />
        </View>
        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              console.log(form);
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F6F6F6',
  },
  header: {
    marginTop: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 26,
    paddingVertical: 4,
    fontWeight: '700',
    color: '#1e1e1e',
    textAlign: 'center',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#929292',
    textAlign: 'center',
  },
  form: {marginBottom: 16},
  formAction: {},
  btn: {
    backgroundColor: '#24303f',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#24303f',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Register;
