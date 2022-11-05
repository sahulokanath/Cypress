describe ('Selector', ()=>
 {
    it('tets1', ()=>
    {
        cy.intercept('**/me/otp?reason=loginOrRegister&mobile=8908064673', { fixture: 'otppage.js' })

        cy.visit('/login', { failOnStatusCode: false });

      
        cy.get('[data-cy="app.components.MobileSignin.login_message"]').click()

        cy.get('[data-cy="app.components.MobileSignin.mob_digit"]').type('8908064673')

        cy.get('[data-cy="checkboxText"]').click()

        cy.get('[data-cy="app.components.Common.continue_btn_caps"]').click()

        cy.get('[data-cy="input_app.components.MobileSignin.enter_otp_here"]').type('885311')
    })


})