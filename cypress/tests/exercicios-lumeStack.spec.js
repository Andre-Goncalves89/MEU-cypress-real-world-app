//import { register } from "module";
import LoginPage from "./exercicios-cypress/pages/loginPage";
import RegisterPage from "./exercicios-cypress/pages/registerPage";
import TransactionPage from "./exercicios-cypress/pages/transactionPage"

const loginPage = new LoginPage()
const registerPage = new RegisterPage()
const transactionPage = new TransactionPage()
//const user = new User()

describe('Login com sucesso', () => {
  it.skip('Deve fazer login com um usuário válido', () => {
    loginPage.acessPage()
    loginPage.signInWithUser('Arvilla_Hegmann' , 's3cret')
  });
  it.skip('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPage.acessPage()
    loginPage.signInFail('teste' , '1234')
  });
});

describe('Registro de novo usuário com sucesso', () => {
  it.skip('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signup')
    registerPage.createValidAccount('abcd' , 'efgh' , 'ab_cd' , '1234' , '1234')
  });
  it.skip('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    cy.visit('http://localhost:3000/signup')
    registerPage.createInvalidAccount('Anyone' , 'Someone' ,  '1234' , '1234')
  });
});

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    transactionPage.login('Arvilla_Hegmann', 's3cret')
    transactionPage.newTransaction('Darrel Ortiz', '200', 'text')
  });

  describe('Visualizar histórico de transações com sucesso', () => {
    it.skip('Deve exibir o histórico de transações de um usuário corretamente', () => {
      transactionPage.login('Arvilla_Hegmann', 's3cret')
      transactionPage.historyView()
    });
  });

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it.skip('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
      transactionPage.login('doda' , '1234')
      transactionPage.viewEmptyHistory()
    });
  });
});
