class LoginPage {
  selectorList() {
    const selectors = {
        firstnameField: "[name='firstName']",
        lastnameField: "[name='lastName']",
        usernameField: "[name='username']",
        passwordField: "[type='password']",
        submitButton: "[type='submit']",
        homeEveryoneBar: "[data-test='nav-public-tab']",
        loginFailMessage: "[data-test='signin-error']"
    }
    return selectors
  }
  acessPage() {
    cy.visit('http://localhost:3000/')
    cy.viewport(700,450)
  }
  signInWithUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().submitButton).click()
    cy.get('.MuiListSubheader-root').contains('Public')
  }
  signInFail(username, password) {
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().submitButton).click()
    cy.get(this.selectorList().loginFailMessage).contains('Username or password is invalid')
  }
}

export default LoginPage