import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleContinue = () => {
    const phoneRegex = /^[0-9]+$/;

    if (!phoneNumber) {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại.');
      return;
    }

    if (!phoneRegex.test(phoneNumber)) {
      Alert.alert('Lỗi', 'Số điện thoại chỉ được chứa chữ số.');
      return;
    }

    if (!phoneNumber.startsWith('0')) {
      Alert.alert('Lỗi', 'Số điện thoại phải bắt đầu bằng 0.');
      return;
    }

    if (phoneNumber.length !== 10) {
      Alert.alert('Lỗi', 'Số điện thoại phải đủ 10 chữ số.');
      return;
    }

    Alert.alert('Thành công', 'Số điện thoại hợp lệ!');
  };

  return (
    <View style={styles.container}>
      
      
      <View style={styles.squaresContainer}>
        <View style={[styles.baseSquare, styles.redBg]} />
        <View style={[styles.baseSquare, styles.greenBg]} />
        <View style={[styles.baseSquare, styles.blueBg]} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại (VD: 0987654321)"
          keyboardType="numeric" // Hiển thị bàn phím số
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          maxLength={15} 
        />
        <Button title="Tiếp tục" onPress={handleContinue} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',     
    backgroundColor: '#ffffff',
  },
  
  squaresContainer: {
    flexDirection: 'row',     
    marginBottom: 40,         
  },
  baseSquare: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 8,          
 
  },
  redBg: { backgroundColor: '#FF6B6B' },
  greenBg: { backgroundColor: '#4ECDC4' },
  blueBg: { backgroundColor: '#45B7D1' },


  inputContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
});

export default App;