import { login } from "../modules";
describe("Orders Page", () => {
  beforeEach(() => {
    // Sign in user
    login(cy);
    cy.url().should("include", "/admin/dashboard");
    cy.get("a[href='/admin/orders']").click();
  });
  it("Should load the Orders page", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.get("h1").contains("Orders");
  });
  // checking skeleton loader
  it("Should display the skeleton loader", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.get(".skeleton-loader").should("be.visible");
  });
  it("Should display the orders table", () => {
    cy.get("table").should("be.visible");

    // check if table has 5 columns
    cy.get("table")

      .find("thead")
      .find("tr")
      .find("th")
      .should("have.length", 11);
  });
  //test for fetching orders
  it("Should fetch orders", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.intercept("https://etcrewservice.onrender.com/v1/order/getOrder").as(
      "getOrders"
    );
    cy.wait("@getOrders").then((xhr) => {
      expect(xhr.request.method).to.equal("POST");
    });
  });
  //test for displaying orders
  it("Should display orders", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.get("table").should("be.visible");
    cy.get("table").find("tbody").find("tr").should("have.length.gte", 1);
  });
  //test for displaying order details
  it("Should display order details", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.get("table").should("be.visible");
    cy.get("table")
      .find("tbody")
      .find("tr")
      .find("td")
      .should("have.length.gte", 11);
  });
  // test create order button click
  it("Should redirect to create order page", () => {
    cy.visit("http://localhost:3000/admin/orders");
    cy.get("a[href='/admin/orders/create']").click();
    cy.url().should("include", "/admin/orders/create");
  });
});
