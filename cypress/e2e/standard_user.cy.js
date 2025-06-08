describe('SauceDemo Automation Tests', () => {
    const baseUrl = 'https://www.saucedemo.com/';
    const username = 'standard_user';
    const password = 'secret_sauce';

    beforeEach(() => {
        cy.visit(baseUrl);
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
        //   cy.url().should('include', '/inventory');
    });

    it('should login successfully as standard_user', () => {
        cy.get('.title').should('contain', 'Products');
    });

    it('should add and remove items from the cart', () => {
        // Add items
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        cy.get('.shopping_cart_badge').should('contain', '2');

        // Remove one item
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_badge').should('contain', '1');
    });
    it('should select "Name (A to Z)"', () => {
        cy.get('.product_sort_container').select('az');
    });

    it('should select "Name (Z to A)"', () => {
        cy.get('.product_sort_container').select('za');
    });

    it('should select "Price (low to high)"', () => {
        cy.get('.product_sort_container').select('lohi');
    });

    it('should select "Price (high to low)"', () => {
        cy.get('.product_sort_container').select('hilo');
    });

    it('should complete checkout (happy path)', () => {
        // Add item and go to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('.shopping_cart_link').click();

        // Proceed to checkout
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();

        // Verify overview and finish
        cy.get('.summary_info').should('exist');
        cy.get('[data-test="finish"]').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
});
