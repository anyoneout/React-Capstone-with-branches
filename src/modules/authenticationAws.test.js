import { describe, expect, it } from "@jest/globals";
import { authenticationAws } from "./authenticationAws";

describe("The authenticationAws function", () => {
  it("authenticates when email and password are correct", async () => {
    //ARRANGE
    const email = "aaa@aaa.com";
    const password = "aaa";
    //ACT
    const isAuthenticated = await authenticationAws(email, password);
    //ASSERT
    expect(isAuthenticated).toBe(true);
  });
  it("doesn't authenticate when email is correct, but password is incorrect", async () => {
    const email = "aaa@aaa.com";
    const password = "123";
    const isAuthenticated = await authenticationAws(email, password);
    expect(isAuthenticated).toBe(false);
  });
  it("doesn't authenticate when the email is not in the list", async () => {
    const email = "sdafasf";
    const password = "aaa";
    const isAuthenticated = await authenticationAws(email, password);
    expect(isAuthenticated).toBe(false);
  });
  it("doesn't authenticate when the email is in the list, but the password is empty", async () => {
    const email = "aaa@aaa.com";
    const password = "";
    const isAuthenticated = await authenticationAws(email, password);
    expect(isAuthenticated).toBe(false);
  });
  it("doesn't authenticate when the email is empty, but the password is in the list", async () => {
    const email = "";
    const password = "aaa";
    const isAuthenticated = await authenticationAws(email, password);
    expect(isAuthenticated).toBe(false);
  });
});

