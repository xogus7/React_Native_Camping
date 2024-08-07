import { useState } from 'react';
import {
  Button, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet,
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import { swaggerInstance } from '@libs/apis';

const registerImg = require('@images/signup.png');
const useroff = require('@icons/register/user-off.png');
const useron = require('@icons/register/user-on.png');
const emailoff = require('@icons/register/Email-off.png');
const emailon = require('@icons/register/Email-on.png');
const passwordoff = require('@icons/register/password-off.png');
const passwordon = require('@icons/register/password-on.png');
const calloff = require('@icons/register/call-off.png');
const callon = require('@icons/register/call-on.png');

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checked, setChecked] = useState(false);

  const postregister = async () => {
    const registerData = { email, password, nickname, phoneNumber };
    try {
      const res = await swaggerInstance.post('/accounts', registerData);
      // 응답 처리
      if (res.ok) {
        console.log('회원가입 성공:', res.data);
        navigation.navigate('Login');
      } else {
        console.error('회원가입 오류:', res.data);
      }
    } catch (error) {
      console.error('회원가입 API 오류', error);
    }
  };

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev;
    });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <Image source={registerImg} style={styles.registerImg} />

          <Text style={styles.registerText}>회원가입</Text>

          <View style={styles.regsiterContainer}>
            <View style={styles.registerForm}>
              <View style={styles.resgisterIcon}>
                {!nickname ? (
                  <Image source={useroff} style={{ width: 14.22, height: 16 }} />
                ) : (
                  <Image source={useron} style={{ width: 14.22, height: 16 }} />
                )}
              </View>
              <TextInput
                style={styles.registerTextInput}
                placeholder="nickname"
                placeholderTextColor="#573353"
                value={nickname}
                onChangeText={setNickname}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.registerForm}>
              <View style={styles.resgisterIcon}>
                {!email ? (
                  <Image source={emailoff} style={{ width: 15, height: 12 }} />
                ) : (
                  <Image source={emailon} style={{ width: 15, height: 12 }} />
                )}
              </View>
              <TextInput
                style={styles.registerTextInput}
                placeholder="email"
                placeholderTextColor="#573353"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.registerForm}>
              <View style={styles.resgisterIcon}>
                {!password ? (
                  <Image source={passwordoff} style={{ width: 12, height: 16 }} />
                ) : (
                  <Image source={passwordon} style={{ width: 12, height: 16 }} />
                )}
              </View>
              <TextInput
                style={styles.registerTextInput}
                placeholder="password"
                placeholderTextColor="#573353"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.registerForm}>
              <View style={styles.resgisterIcon}>
                {!phoneNumber ? (
                  <Image source={calloff} style={{ width: 20, height: 20 }} />
                ) : (
                  <Image source={callon} style={{ width: 20, height: 20 }} />
                )}
              </View>
              <TextInput
                style={styles.registerTextInput}
                placeholder="phoneNumber"
                placeholderTextColor="#573353"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                autoCapitalize="none"
              />
            </View>
          </View>

          <View style={styles.agreementWrapper}>
            <Pressable
              onPress={handleCheckboxPress}
              style={{ width: 24, height: 24 }}>
              <AnimatedCheckbox
                checked={checked}
                highlightColor="#FDA758"
                checkmarkColor="#573353"
                boxOutlineColor="#FDA758"
              />
            </Pressable>
            <Text style={styles.agreementText}>약관 동의</Text>
          </View>

          <TouchableOpacity
            onPress={() => postregister()}
            style={styles.resgiterButton}>
            <Text style={styles.createAccount}>회원가입하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF3E9',
    alignItems: 'center',
  },
  registerImg: {
    width: 188,
    height: 200,
    marginTop: 48,
  },
  registerText: {
    marginTop: 21,
    fontWeight: '700',
    fontSize: 24,
    color: '#573353',
  },
  regsiterContainer: {
    marginTop: 32,
    width: 374,
    alignItems: 'center',
  },
  registerForm: {
    flexDirection: 'row',
    gap: 1,
  },
  resgisterIcon: {
    width: 49,
    height: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerTextInput: {
    width: 325,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 16,
    color: '#FDA758',
    fontWeight: '500',
  },
  agreementWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-Start',
    flexDirection: 'row',
    gap: 11,
    marginBottom: 24,
    width: 356,
  },
  agreementText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#573353',
  },
  resgiterButton: {
    width: 374,
    height: 60,
    backgroundColor: '#FDA758',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  createAccount: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Register;