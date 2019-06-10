import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 0px 24px;
`;
export const ContainerMain = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TextContainer = styled.Text`
  font-weight: bold;
  font-size: 25;
  color: #333333;
  padding-bottom: 36;
`;
export const ContainerInput = styled.View`
  flex: 1;
  flex-direction: row;
  max-height: 50px;
  border: 1px #abb1b7;
  border-radius: 4px;
  padding-left: 20;
  align-items: center;
  margin-bottom: 17;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 20;
  color: #333333;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  max-height: 50;
  margin: 40px 6px;
  background: #733dbe;
  border-radius: 5px;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 16;
  text-align: center;
  font-weight: 500;
`;

export const TextLabel = styled.Text`
  font-size: 14;
  color: #666666;
  margin-bottom: 8;
`;
