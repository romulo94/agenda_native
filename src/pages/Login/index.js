import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UsersActions } from '../../store/ducks/users';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-root-toast';
import {
  Container,
  TextContainer,
  ContainerMain,
  Input,
  Button,
  TextLabel,
  TextButton,
  ContainerInput,
} from './styles';

class Login extends Component {
  state = {
    email: '',
    password: '',
    show: false,
    text: '',
    visible: false,
  };

  signIn = () => {
    const { email, password } = this.state;
    const { addUserRequest } = this.props;
    addUserRequest(email, password);
  };

  render() {
    const { password, email } = this.state;
    const { users, navigation } = this.props;

    return (
      <Container>
        {users.token ? navigation.navigate('DrawerScreens') : null}
        <ContainerMain>
          <TextContainer>Faça seu login 🔑</TextContainer>

          <TextLabel>E-mail ou usuário</TextLabel>
          <ContainerInput>
            <Input
              autoCapitalize="none"
              value={email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Icon style={{ paddingHorizontal: 15 }} name="envelope" size={19} color="#AAAAAA" />
          </ContainerInput>

          <TextLabel>Senha</TextLabel>
          <ContainerInput>
            <Input value={password} onChangeText={text => this.setState({ password: text })} />
          </ContainerInput>
        </ContainerMain>

        <Button onPress={this.signIn}>
          <TextButton>Entrar</TextButton>
        </Button>

        {/* <Toast
          visible={this.state.visible}
          position={50}
          shadow={false}
          animation={false}
          hideOnPress={true}
        >
          Usuário ou senha inválidos.
        </Toast> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...UsersActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
