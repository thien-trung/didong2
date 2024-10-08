import Ionicons from '@expo/vector-icons/Ionicons';
import {Text, TextInput,View,TouchableOpacity,StyleSheet, Image} from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import { router } from 'expo-router';

export default function TabTwoScreen() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleRegisterPress = () => {
        router.push('/register');
      };
  return (
    <View style={styles.titleContainer}>
        <ThemedView  style={styles.text}>
        <ThemedText type="title">Đăng Nhập</ThemedText>
      </ThemedView>
        <Image
        style={styles.logoapp}
        source={require('@/assets/images/logo4.png')}  
      />

     
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
 
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />

      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

   
    <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </TouchableOpacity> 

       
      <TouchableOpacity style={styles.socialButton}>
        <Ionicons name="logo-google" size={24} color="white" />
        <Text style={styles.socialButtonText}>Đăng nhập bằng Google</Text>
      </TouchableOpacity>

   
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <Ionicons name="logo-facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Đăng nhập bằng Facebook</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.textRegister}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
    </View>
    
  );
  
}

const styles = StyleSheet.create({
    titleContainer: {
        marginVertical: 50,
      },
      text: {
        marginVertical: 20,

        justifyContent: 'center',
        alignItems: 'center',

      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    logo: {
      width: 350,
      height: 200,
      resizeMode: 'contain',
      marginBottom: 50,
    },
    input: {
      width: '100%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 15,
      marginBottom: 15,
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: '#4285F4', 
      padding: 15,
      borderRadius: 5,
      width: '100%',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    forgotPasswordText: {
      color: '#4285F4',
      marginBottom: 20,
      fontSize: 16,
      alignItems: 'flex-end',
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#db4437', 
      padding: 15,
      borderRadius: 5,
      width: '100%',
      justifyContent: 'center',
      marginBottom: 10,
    },
    facebookButton: {
      backgroundColor: '#4267B2',  
    },
    socialButtonText: {
      color: 'white',
      fontSize: 16,
      marginLeft: 10,
    },
    baseText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
     
      marginBottom: 15,
    },
    logoapp: {
        width: 420,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 0,
        marginVertical: 0,

      },
      textRegister:{
        color:'white',
        textAlign:'center',
        marginVertical: 10,

      },
  
});
