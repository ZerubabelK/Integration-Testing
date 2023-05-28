const sizes = ["iphone-6", "ipad-2"];
describe("Home Page", () => {
  it("passes", () => {
    cy.viewport("macbook-15");
    cy.visit("http://localhost:3000/");
    cy.get("header").contains("etcrewservices");
    cy.get("header").contains("Sign in");
    cy.get("header").contains("Sign up");
    cy.get(".hero-img").should("be.visible");
    cy.get(".get_started").contains("Get Started").should("be.visible");
    cy.get("header").contains("Sign in").click();
    cy.url().should("include", "/auth/login");
  });
  sizes.forEach((size) => {
    it(`Should not display Auth buttons on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:3000/");
      cy.get(".auth-btns").should("not.be.visible");
    });
    it(`Should not display SVG images on hero and features buttons on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size);
      }

      cy.visit("http://localhost:3000/");
      cy.get(".aircraft").should("not.be.visible");
      cy.get(".hero-img").should("not.be.visible");
    });
  });
});
