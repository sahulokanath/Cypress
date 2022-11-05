describe ('Selector', ()=>
 {
    it('Implecity asserction', ()=>
    {
  /*     
        cy.visit("https://www.wikipedia.org/")
        
        // should  , and two key word

        cy.url().should('include','wiki')
        .and('eq','https://www.wikipedia.org/')
        .and('contain','wik')

        
        
         cy.url().should('include','wiki')
        .should('eq','https://www.wikipedia.org/')
        .should('contain','wik')

        

        cy.url().should('not.include','oo')
        .and('not.eq','https://www.wipedia.org/')
        .and('not.contain','rrik')

    */

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")

        cy.xpath("//input[@placeholder='Username']").type("Admin")
        
        cy.xpath("//input[@placeholder='Password']").type("admin123")

        cy.xpath("//button[normalize-space()='Login']").click()

        let expet="Paul Collings"

        cy.xpath("//p[@class='oxd-userdropdown-name']").then((x)=>{
            let actual=x.text()

            //BDD style
            expect(actual).to.equal(expet)
           // expect(actual).to.not.equal(expet)

           //tdd style
           assert.equal(actual,expet)
          // assert.notEqual(actual,expet)
        })
        })
      
    })
    

