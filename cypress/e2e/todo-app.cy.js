/// <reference types="cypress" />

describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should add a new todo", () => {
    cy.get("#new-todo").should("exist");
    cy.get("#new-todo").type("Learn Cypress");
    cy.get("#new-todo-btn").click();
    cy.get("#list").should("contain.text", "Learn Cypress");
  });
});

//filter funktion

it("should filter completed todos", () => {
  cy.get("#new-todo").type("Complete the project");
  cy.get("#new-todo-btn").click();
  cy.get("#list input[type='checkbox']").first().check();
  cy.contains("Show done").click();
  cy.get("#list li").should("have.class", "done");
});

// Löschen von erledigten Todos

it("should delete completed todos", () => {
  cy.get("#new-todo").type("Finish project");
  cy.get("#new-todo-btn").click();
  cy.get("#list input[type='checkbox']").first().check();
  cy.contains("Delete Done Todos").click();
  cy.get("#list").should("not.contain.text", "Finish project");
});

// TEst auf Duplikat

it("should not allow adding duplicate todos", () => {
  cy.get("#new-todo").type("Go running");
  cy.get("#new-todo-btn").click();
  cy.get("#new-todo").type("Go running");
  cy.get("#new-todo-btn").click();
  cy.get("#list li").should("have.length", 1);
});
