import { login } from "../modules";

describe("Create Order Page", () => {
  beforeEach(() => {
    // Sign in user
    login(cy);
    cy.url().should("include", "/admin/dashboard");
    cy.get("a[href='/admin/orders']").click();
    cy.url().should("include", "/admin/orders");
    cy.get("a[href='/admin/orders/create']").click();
    cy.url().should("include", "/admin/orders/create");
  });
  it("Should load the Create Order page", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
  });
  // test stepper order form
  it("Should display the stepper order form", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
  });
  // test which step is active
  it("Should display the active step", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
    cy.get(".stepper").find(".active").should("be.visible");
  });

  it("Should display Next Customer Details button on first step", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
    cy.get(".account").should("be.visible");
    cy.get(".account").contains("New Customer");
  });
  it("Should display Search User field on first step", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
    cy.get(".account").should("be.visible");
    cy.get("input#search-dropdown").should("be.visible");
  });
  it("Should display New Customer form", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
    cy.get(".account").should("be.visible");
    cy.get(".account").contains("New Customer").click();
    cy.get(".account").contains("New Customer").should("not.exist");
    cy.get(".account").contains("Get Back").should("be.visible");
  });
  it("Should create new customer", () => {
    cy.visit("http://localhost:3000/admin/orders/create");
    cy.get(".stepper").should("be.visible");
    cy.get(".account").should("be.visible");
    cy.get(".account").contains("New Customer").click();
    cy.get(".account").contains("New Customer").should("not.exist");
    cy.get(".account").contains("Get Back").should("be.visible");
    cy.get("input#first_name").type("John");
    cy.get("input#last_name").type("Doe");
    cy.get("input#email").type("test@gmail.com");
    cy.get("input#phone").type("123456789");
    cy.get("input#gender").type("Male");

    cy.intercept("https://etcrewservice.onrender.com/v1/user/create").as(
      "postRequest"
    );
  });
});
