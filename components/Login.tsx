import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import loginLogo from '../assets/images/login-logo.png';
import React, {useState} from 'react';
import Input from './UI/Input';

const Login = ({navigation}: {navigation: any}) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={loginLogo} style={styles.image} resizeMode="contain" />
          <Text style={styles.title}>Login to App</Text>
          <Text style={styles.subtitle}>Please Login to Full Access</Text>
        </View>
        <View style={styles.form}>
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
        </View>
        <View style={styles.formAction}>
          <TouchableOpacity
            onPress={() => {
              console.log(form);
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.registerContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.registerLink}>
            <Text style={styles.registerText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F6F6F6',
  },
  header: {
    marginVertical: 36,
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginBottom: 24,
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
  form: {marginBottom: 24},
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  registerLink: {},
  registerText: {fontWeight: '700', color: '#24303f', marginLeft: 4},
});

export default Login;
