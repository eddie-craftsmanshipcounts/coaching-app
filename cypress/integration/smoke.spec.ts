describe('Coaching App', () => {
   it('Smokes', () => {
       cy.visit('/');
       cy.get('h1').contains('Howdy, Fellow Coaches!');
   }) ;
});

const dummy = {}
export default dummy;
