module.exports = {
  login: (cy) => {
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
  },
};
