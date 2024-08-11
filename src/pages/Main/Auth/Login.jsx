import React, {useState} from 'react';
import {
  Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity,
  View, Dimensions, KeyboardAvoidingView, ScrollView, Pressable,
} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import {swaggerInstance} from '@utils/apisInstanace';
import TextButton from '@components/TextButton';
import { COLOR } from '@styles/color';

const loginimg = require('@images/Loginimg.png');
const loginGoogle = require('@icons/login/GoogleIcon.png');
const loginFacebook = require('@icons/login/Vector.png');
const emailoff = require('@icons/register/Email-off.png');
const emailon = require('@icons/register/Email-on.png');
const passwordoff = require('@icons/register/password-off.png');
const passwordon = require('@icons/register/password-on.png');

const {width} = Dimensions.get('window');
const Login = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(true)

  const clickLogin = async () => {
    try {
      const res = await swaggerInstance.post('/auth', {email, password});
      // 응답 처리
      if (res.ok) {
        console.log('로그인 성공:', res.data.success);
        navigation.navigate('MainTab');
      } else {
        console.error('로그인 오류:', res.data);
      }
    } catch (error) {
      console.error('로그인 중 오류', error);
    }
  };

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev;
    });
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground
        source={loginimg}
        style={{flex: 1, alignItems: 'center'}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.contentsContainer}>
            <Text style={styles.welcomMessage}>환영해요!</Text>

            <View style={styles.socialLoginContainer}>
              <TouchableOpacity style={styles.socialLoginWrapper}>
                <Image source={loginGoogle} style={{width: 32, height: 32, bottom: -4}} />
                <Text style={styles.socialLoginText}>Continue with Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialLoginWrapper}>
                <Image source={loginFacebook} style={{width: 32, height: 42, bottom: -5}} />
                <Text style={styles.socialLoginText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.loginContainer}>
              <Text style={styles.loginContainerTitle}>
                이메일로 로그인하기
              </Text>
              <View style={{ width:width, height: 1,
                backgroundColor: COLOR.WHITE_ORANGE,
                marginTop: 8,
                marginBottom: 12}} />
              <View style={styles.loginForm}>
                {!email ? (
                  <Image source={emailoff} style={styles.emailIcon} />
                ) : (
                  <Image source={emailon} style={styles.emailIcon} />
                )}
                <TextInput
                  style={styles.loginInput}
                  placeholder="email"
                  placeholderTextColor={COLOR.PURPLE}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.loginForm}>
                {!password ? (
                  <Image source={passwordoff} style={styles.passwordIcon} />
                ) : (
                  <Image source={passwordon} style={styles.passwordIcon} />
                )}
                <TextInput
                  style={styles.loginInput}
                  placeholder="password"
                  placeholderTextColor={COLOR.PURPLE}
                  value={password}
                  secureTextEntry={isVisible}
                  onChangeText={setPassword}
                  autoCapitalize="none"
                ></TextInput>
                <View style={{position: 'absolute', right: 10, top: 15}}>
                <TextButton text={'Show'}
                  fontWeight={1}
                  textDecorationLine={'underline'}
                  onPress={()=> setIsVisible(!isVisible)}
                  />
                </View>
              </View>

              <View style={styles.autologinWrapper}>
                <Pressable
                  onPress={handleCheckboxPress}
                  style={{width: 24, height: 24}}>
                  <AnimatedCheckbox
                    checked={checked}
                    highlightColor={COLOR.ORANGE}
                    checkmarkColor={COLOR.PURPLE}
                    boxOutlineColor={COLOR.ORANGE}
                  />
                </Pressable>
                <Text style={styles.autoLoginText}>자동 로그인</Text>
              </View>

              <TouchableOpacity
                onPress={() => clickLogin()}
                style={styles.loginButton}>
                <Text style={styles.loginText}>로그인</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={styles.registerWrapper}>
                <Text style={styles.registerText1}>아직 회원이 아니세요?</Text>
                <Text style={styles.registerText2}>회원가입</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contentsContainer: {
    alignItems: 'center',
    flex: 1,
  },
  welcomMessage: {
    fontSize: 32,
    fontWeight: '700',
    color: COLOR.PURPLE,
    marginBottom: 73,
    marginTop: 200,
  },
  socialLoginContainer: {
    gap: 8,
  },

  socialLoginWrapper: {
    flexDirection: 'row',
    gap: 24,
    backgroundColor: COLOR.WHITE,
    width: 374,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  socialLoginText: {
    color: COLOR.PURPLE,
    fontSize: 16,
    fontWeight: '700',
  },
  loginContainer: {
    marginTop: 25,
    width: width,
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    gap: 8,
    backgroundColor: COLOR.WHITE,
  },
  loginContainerTitle: {
    marginTop: 12,
    color: COLOR.PURPLE,
    fontSize: 16,
    fontWeight: '500',
  },
  loginForm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailIcon: {
    position: 'absolute',
    width: 15,
    height: 12,
    left: 24,
    zIndex: 2,
  },
  passwordIcon: {
    position: 'absolute',
    width: 12,
    height: 16,
    left: 24,
    zIndex: 2,
  },
  loginInput: {
    width: 374,
    height: 56,
    backgroundColor: COLOR.WHITE_ORANGE,
    paddingLeft: 64,
    color: COLOR.ORANGE,
    fontWeight: '600',
    fontSize: 16,
    borderRadius: 12,
  },
  autologinWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-Start',
    flexDirection: 'row',
    gap: 11,
    marginVertical: 18,
    width: 356,
  },
  autoLoginText: {
    fontWeight: '500',
    fontSize: 16,
    color: COLOR.PURPLE,
  },
  loginButton: {
    width: 374,
    height: 60,
    backgroundColor: COLOR.ORANGE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '700',
  },
  registerWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    gap: 2,
  },
  registerText1: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.PURPLE,
  },
  registerText2: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.PURPLE,
  },
});

export default Login;