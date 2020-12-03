describe('Coaching App', () => {
   it('Smokes', () => {
       cy.visit('/');
       let pageHeadings = cy.get('.page__heading');
       pageHeadings.should('have.length', 1);
       pageHeadings.first().contains('Howdy, Fellow Coaches!');
   }) ;

   it('can navigate to sign-up from the home page', () => {
       cy.visit('/');
       cy.get('header').contains('Sign-In').click();
       let pageHeadings = cy.get('.page__heading');
       pageHeadings.should('have.length', 1);
       pageHeadings.first().contains("We're Excited to See You Again!");
   });
});

const dummy = {}
export default dummy;
