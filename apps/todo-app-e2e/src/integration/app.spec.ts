describe('todoList-app', () => {
  beforeEach(() => cy.visit('/'));

    });

    // it('has the correct title', () => {
    //   cy.title().should('include', 'TodoApp');
    // });

    it("should add task", () => {
      cy.visit("");
      cy.get("[data-test=btn-add]").click();
      cy.get("[data-test=taskDesc]").type("new task test");
      
      cy.get("[data-test=btn-confirm]").click().then(d=>{
        cy.get('[data-test=todoTable]').should('contain', "new task test").then($row => {
          $row.find('[data-test=btn-delete]').click();
      });;

      })
     
     // cy.get('[ data-test=btn-delete]').click(); //clean data
     
    })

    it("no new row on cancel", () => {
      cy.visit("");
      cy.get("[data-test=btn-add]").click();
      cy.get("[data-test=taskDesc]").type("new task test");
      
      cy.get("[data-test=btn-cancel]").click();
      cy.get('[data-test=todoTable]').should('not.contain', "new task test");
        
    })
   
    it('should be able to delete', () => {
      cy.get("[data-test=btn-add]").click();
      cy.get("[data-test=taskDesc]").type("delete this task").get("[data-test=btn-confirm]").click();
      cy.get('[data-test=btn-delete]').click();
  
      cy.get('[data-test=todoTable]').should('not.contain', "delete this task");
    });
  
    it('should be able to update', () => {
      cy.get("[data-test=btn-add]").click();
      cy.get("[data-test=taskDesc]").type("new task test");
      
      cy.get("[data-test=btn-confirm]").click();

      cy.get("[data-test=btn-edit]").click();
      cy.get("[data-test=taskDesc]").clear().type("edit task");
      cy.get("[data-test=btn-confirm]").click();
      cy.get('[data-test=todoTable]').should('not.contain', "new task test");
      cy.get('[data-test=todoTable]').should('contain', "edit task").then($row => {
        $row.find('[data-test=btn-delete]').click();
    });;
    });
    it("After clicking 'done' the item should contain done css class", () => {
      cy.get('[data-test=btn-add]').click().get("[data-test=taskDesc]")
        .type('SomeTodo 111')
        .get('[data-test=btn-confirm]')
        .click()
        .get('[data-test=check-Done]')
        .click().get('[data-test=todoTable]').find('tr')
        .should('have.class', 'highlight').then($row => {
          $row.find('[data-test=btn-delete]').click(); //clean data
        });;
    });

    
    it('Add Todo button is enabled when input is not empty', () => {
      cy.get('[data-test=btn-add]').click()
        .get('[data-test=btn-confirm]').should('have.attr', 'disabled');
      cy.get("[data-test=taskDesc]")
        .type('SomeTodo 111')
        .get('[data-test=btn-confirm]').should('not.have.attr', 'disabled')
        .get('[data-test=btn-cancel]').click();
    });