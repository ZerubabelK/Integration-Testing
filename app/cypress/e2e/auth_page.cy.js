describe("Auth Page", () => {
  it("Should load the Login page", () => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get("button").contains("Sign In").should("be.visible");
    cy.get(".error").should("not.exist");
  });
  it("should make a POST request to the new server", () => {
    cy.visit("http://localhost:3000/auth/login");
    // Fill out web form
    cy.get("input#email").type("matiyasy1@gmail.com");
    cy.get("input#password").type("qwerty");
    // Set up a new server to intercept requests on
    cy.intercept("https://etcrewservice.onrender.com/v1/user/login").as(
      "postRequest"
    );

    // Click the button that triggers the POST request
    cy.get("button").contains("Sign In").click();

    // Wait for the POST request to complete
    cy.wait("@postRequest").then((xhr) => {
      // Assert on the request properties
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.request.body).to.deep.equal({
        email: "matiyasy1@gmail.com",
        password: "qwerty",
      });
    });
  });
  it('Should display the error message "Invalid credentials"', () => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get("input#email").type("mati@gmail.com");
    cy.get("input#password").type("qwerty");
    cy.intercept("https://etcrewservice.onrender.com/v1/user/login").as(
      "postRequest"
    );

    // Click the button that triggers the POST request
    cy.get("button").contains("Sign In").click();

    // Wait for the POST request to complete
    cy.wait("@postRequest").then((xhr) => {
      // Assert on the request properties
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.request.body).to.deep.equal({
        email: "mati@gmail.com",
        password: "qwerty",
      });
    });
    // check response status
    cy.get("@postRequest").should((xhr) => {
      expect(xhr.response.statusCode).to.equal(401);
    });

    // check if response is error
    cy.get(".error").should("be.visible");
  });
  it('Should redirect to "/admin/dashboard" after successful login', () => {
    cy.visit("http://localhost:3000/auth/login");
    cy.get("input#email").type("matiyasy1@gmail.com");
    cy.get("input#password").type("qwerty");
    cy.intercept("https://etcrewservice.onrender.com/v1/user/login").as(
      "postRequest"
    );

    // Click the button that triggers the POST request
    cy.get("button").contains("Sign In").click();

    // Wait for the POST request to complete
    cy.wait("@postRequest").then((xhr) => {
      // Assert on the request properties
      expect(xhr.request.method).to.equal("POST");
      expect(xhr.request.body).to.deep.equal({
        email: "matiyasy1@gmail.com",
        password: "qwerty",
      });
    });
    // check response status
    cy.get("@postRequest").should((xhr) => {
      expect(xhr.response.statusCode).to.equal(200);
    });
    cy.url().should("include", "/admin/dashboard");
  });
});
