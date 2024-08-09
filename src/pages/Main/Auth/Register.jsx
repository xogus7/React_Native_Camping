import { useState } from 'react';
import {
  Button, Image, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet,
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import { swaggerInstance } from '@libs/apis';
import { COLOR } from '@styles/color';
import TextButton from '@components/TextButton';

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
  const [isVisible, setIsVisible] = useState(true)

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
                placeholderTextColor={COLOR.PURPLE}
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
                placeholderTextColor={COLOR.PURPLE}
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
                placeholderTextColor={COLOR.PURPLE}
                value={password}
                secureTextEntry={isVisible}
                onChangeText={setPassword}
                autoCapitalize="none"
              />
              <View style={{position: 'absolute', right: 10, top: 15}}>
                <TextButton text={'Show'}
                  fontWeight={1}
                  textDecorationLine={'underline'}
                  onPress={()=> setIsVisible(!isVisible)}
                  />
                </View>
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
                placeholderTextColor={COLOR.PURPLE}
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
                highlightColor={COLOR.ORANGE}
                checkmarkColor={COLOR.PURPLE}
                boxOutlineColor={COLOR.ORANGE}
              />
            </Pressable>
            <Text style={styles.agreementText}>약관 동의</Text>
          </View>

          <TouchableOpacity
            onPress={() => postregister()}
            style={styles.resgiterButton}>
            <Text style={styles.createAccount}>회원가입하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              marginTop: 18,
              flexDirection: 'row',
              gap: 2,
            }}>
            <Text style={{
              fontSize: 14,
              fontWeight: '500',
              color: COLOR.PURPLE,
            }}>회원이세요?
            </Text>
            <Text style={{
              fontSize: 14,
              fontWeight: '700',
              color: COLOR.PURPLE,
            }}>로그인</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE_ORANGE,
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
    color: COLOR.PURPLE,
  },
  regsiterContainer: {
    marginTop: 32,
    width: 374,
    alignItems: 'center',
  },
  registerForm: {
    flexDirection: 'row',
    gap: 1,
    borderRadius: 18,
  },
  resgisterIcon: {
    width: 49,
    height: 50,
    backgroundColor: COLOR.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  registerTextInput: {
    width: 325,
    height: 50,
    backgroundColor: COLOR.WHITE,
    color: '#FDA758',
    fontWeight: '500',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 8,
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
    color: COLOR.PURPLE,
  },
  resgiterButton: {
    width: 374,
    height: 60,
    backgroundColor: COLOR.ORANGE,
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