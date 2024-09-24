class RegisterPage {
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']",
            dialogTitle: "[data-test='user-onboarding-dialog-title']",
            buttonType: "[type='button']",
            containsErrorMsg: '#username-helper-text'
        }
        return selectors
    }
    createValidAccount(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorList().firstNameField).type(firstname)
        cy.get(this.selectorList().lastNameField).type(lastname)
        cy.get(this.selectorList().userNameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorList().submitButton).click()
    }
    createInvalidAccount(firstname, lastname, password, confirmpassword) { // with invalid username
        cy.get(this.selectorList().firstNameField).type(firstname)
        cy.get(this.selectorList().lastNameField).type(lastname)
        //cy.get(this.selectorList().userNameField).type(' ')
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorList().userNameField).click()
        cy.get('.App-root').click()
        cy.get(this.selectorList().containsErrorMsg).contains('Username is required')
    }
}




export default RegisterPage