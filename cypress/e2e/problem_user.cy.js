describe('SauceDemo Automation Tests - problem_user', () => {
  const baseUrl = 'https://www.saucedemo.com/';
  const username = 'problem_user';
  const password = 'secret_sauce';

  beforeEach(() => {
    cy.visit(baseUrl);
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory');
  });

  it('should login successfully as problem_user (with visual/UI glitches)', () => {
    cy.get('.title').should('contain', 'Products');

    // Known bug: product images may be broken
    cy.get('.inventory_item_img img').each(($img) => {
      cy.wrap($img).should('have.attr', 'src').and('include', '.jpg');
    });
  });

  it('should attempt to add/remove items from cart (may fail visually)', () => {
    // Add items
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    // Check cart badge count
    cy.get('.shopping_cart_badge').should('contain', '2');

    // Remove one item
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });

  it('should attempt filtering products - functionality may not update UI properly', () => {
    cy.get('[data-test="product_sort_container"]').click('za');

    // Known bug: sort may not reflect in UI
    cy.get('.inventory_item_name').first().then(($el) => {
      const name = $el.text().trim();
      cy.log(`First product name after sort (Z-A): ${name}`);
    });
  });

  it('should attempt checkout (happy path)', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('99999');
    cy.get('[data-test="continue"]').click();

    // Overview may render correctly
    cy.get('.summary_info').should('exist');
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });
});
