import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';

import api from './src/services/api';

//https://www.youtube.com/watch?v=Zo3gS3XQIuM&t=164s
import { TextInputMask } from 'react-native-masked-text';

//convert?q=USD_PHP&compact=ultra&apiKey=15a95261376a634a3e48
class Conversor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cnpjDigitado: '',
      cnpj: '',
      nome: '',
      fantasia: '',
      porte: '',
      abertura: '',
      tipo: '',
      status: '',
      email: '',
      telefone: '',
      ultima_atualizacao: '',
      logradouro: '',
      bairro: '',
      complemento: '',
      uf: '',
      numero: '',
      cep: '',
      capital_social: ''
    };

    this.converter = this.converter.bind(this);
  }

  async converter() {
    //https://www.receitaws.com.br/v1/cnpj/14660263000131
    let cnpj2 = '14660263000131';
    const cnpj = this.state.cnpjDigitado;
    //const cnpj3 = '99.999.999/9999-99';
    //const unmasked = this.state.cnpjDigitado.getRawValue();
    //const unmasked = cnpj3.getRawValue()
    const unmasked = this.cnpjField.getRawValue()
     alert(unmasked);
    const response = await api.get(unmasked);

    this.setState({
      cnpj: response.data.cnpj,
      nome: response.data.nome,
      fantasia: response.data.fantasia,
      porte: response.data.porte,
      abertura: response.data.abertura,
      tipo: response.data.tipo,
      status: response.data.status,
      email: response.data.email,
      telefone: response.data.telefone,
      ultima_atualizacao: response.data.ultima_atualizacao,
      logradouro: response.data.logradouro,
      bairro: response.data.bairro,
      complemento: response.data.complemento,
      uf: response.data.uf,
      numero: response.data.numero,
      cep: response.data.cep,
      capital_social: response.data.capital_social,
    });
     
    //fechar teclado
    Keyboard.dismiss();
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>

          {/*<TextInput
            placeholder="Digite o CNPJ"
            style={styles.areaInput}
            onChangeText={(cnpjDigitado) => this.setState({ cnpjDigitado })}
            keyboardType="numeric"
          />*/}

          <TextInputMask
            style={styles.areaInput}
            placeholder="Digite o CNPJ"
            value={this.state.cnpjDigitado}
            type={'cnpj'}
            onChangeText={(cnpjDigitado) => this.setState({ cnpjDigitado })}
            ref={(ref) => this.cnpjField = ref}
          />


          <TouchableOpacity style={styles.botaoArea} onPress={this.converter}>
            <Text style={styles.botaoText}>BUSCAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dadosEmpresa}>
          <ScrollView style={{ backgroundColor: '#A9DBB3', flex: 1 }}>
            <Text style={styles.cnpjText}>{(this.state.cnpj == '') ? '' : 'CNPJ: ' + this.state.cnpj}</Text>
            <Text style={styles.empresa}>{(this.state.nome == '') ? '' : 'Nome: ' + this.state.nome}</Text>
            <Text style={styles.empresa}>{(this.state.fantasia == '') ? '' : 'Fantasia: ' + this.state.fantasia}</Text>
            <Text style={styles.empresa}>{(this.state.porte == '') ? '' : 'Porte: ' + this.state.porte == ''}</Text>
            <Text style={styles.empresa}>{(this.state.abertura == '' ? '' : 'Abertura: ' + this.state.abertura)}</Text>
            <Text style={styles.empresa}>{(this.state.tipo == '') ? '' : 'Tipo: ' + this.state.tipo}</Text>
            <Text style={styles.empresa}>{(this.state.status == '') ? '' : 'Status: ' + this.state.status}</Text>
            <Text style={styles.empresa}>{(this.state.email == '') ? '' : 'Email: ' + this.state.email}</Text>
            <Text style={styles.empresa}>{(this.state.telefone == '') ? '' : 'Telefone: ' + this.state.telefone}</Text>
            <Text style={styles.empresa}>{(this.state.ultima_atualizacao == '') ? '' : 'Atualizado em: ' + this.state.ultima_atualizacao}</Text>
            <Text style={styles.empresa}>{(this.state.logradouro == '') ? '' : 'Emdereço: ' + this.state.logradouro}</Text>
            <Text style={styles.empresa}>{(this.state.bairro == '') ? '' : 'Bairro: ' + this.state.bairro}</Text>
            <Text style={styles.empresa}>{(this.state.complemento == '') ? '' : 'Complemento: ' + this.state.complemento}</Text>
            <Text style={styles.empresa}>{(this.state.uf == '') ? '' : 'UF: ' + this.state.uf}</Text>
            <Text style={styles.empresa}>{(this.state.numero == '') ? '' : 'Nº: ' + this.state.numero}</Text>
            <Text style={styles.empresa}>{(this.state.cep == '') ? '' : 'Cep: ' + this.state.cep}</Text>
            <Text style={styles.empresa}>{(this.state.capital_social == '') ? '' : 'Capital: ' + this.state.capital_social}</Text>
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#A9DBB3',
    width: '100%'
    //justifyContent: 'center',
  },
  areaInput: {
    width: 280,
    height: 45,
    backgroundColor: '#009688',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    color: '#000',
    borderRadius: 5,
  },
  botaoArea: {
    width: 150,
    height: 45,
    backgroundColor: '#ff0000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  botaoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  empresa: {
    fontSize: 15,
  },
  cnpjText: {
    textAlign: 'center',
    marginTop: 20
  },
  dadosEmpresa: {
    flex: 1,
    margin: 15
  }
});

export default Conversor;
