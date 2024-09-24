import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage()

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {
      loginPage.acessPage()
    });
  });