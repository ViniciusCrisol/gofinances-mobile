import React, { useEffect, useRef } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

interface InputValueReference {
  value: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const { registerField, defaultValue, fieldName } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      placeholderTextColor="#969CB3"
      defaultValue={defaultValue}
      onChangeText={(value) => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  );
};

export default Input;
