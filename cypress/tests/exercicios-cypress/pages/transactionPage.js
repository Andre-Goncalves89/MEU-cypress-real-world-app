import LoginPage from "./loginPage"

const loginPage = new LoginPage()

class TransactionPage {
    selectorsPage() {
        const selectors = {
            loginValidation: "[data-test='sidenav']",
            homeButton: "[data-test='sidenav-home']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            searchField: "[data-test='user-list-search-input'][name='q']",
            userListItem: "[data-test='user-list-item-uBmeaz5pX']",
            amountField: "[name='amount']",
            noteField: "[value='']",
            payButton: "[data-test='transaction-create-submit-payment']",
            validationPayment: ':nth-child(2) > .MuiGrid-container > .MuiGrid-root > .MuiTypography-root',
            personalTransactionsButton: "[data-test='nav-personal-tab']",
            personalCampus: '.css-r6xdvf-MuiListSubheader-root',
            emptyList: "[data-test='empty-list-header']"
        }
        return selectors
    }
    login(user, password) {
        cy.visit('http://localhost:3000')
        cy.get('#username').type(user)
        cy.get('#password').type(password)
        cy.get("[data-test='signin-submit']").click()
    }
    newTransaction(user, amount, note) {
        cy.get(':nth-child(1) > .MuiTypography-subtitle2').contains('Account Balance')
        cy.viewport(900, 600)
        cy.get(this.selectorsPage().homeButton).click()
        cy.get(this.selectorsPage().newTransactionButton).click()
        cy.get(this.selectorsPage().searchField).type(user)
        cy.get(this.selectorsPage().userListItem).click()
        cy.get(this.selectorsPage().amountField).click()
        cy.get(this.selectorsPage().amountField).type(amount)
        cy.get(this.selectorsPage().noteField).click()
        cy.get(this.selectorsPage().noteField).type(note)
        cy.get(this.selectorsPage().payButton).click()
        cy.get(this.selectorsPage().validationPayment).contains('Paid')
    }
    historyView() {
        cy.viewport(900, 600)
        cy.get(this.selectorsPage().personalTransactionsButton).click()
        cy.get(this.selectorsPage().personalCampus).contains('Personal')
    }
    viewEmptyHistory() {
        cy.get(this.selectorsPage().personalTransactionsButton).click()
        cy.get(this.selectorsPage().emptyList).contains('No Transactions')
    }
}

export default TransactionPage