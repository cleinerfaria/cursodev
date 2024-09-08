import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations return 200", async () => {
  const res1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res1.status).toBe(201);

  const res1Body = await res1.json();

  expect(Array.isArray(res1Body)).toBe(true);
  expect(res1Body.length).toBeGreaterThan(0);

  const res2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(res2.status).toBe(200);

  const res2Body = await res2.json();

  expect(Array.isArray(res2Body)).toBe(true);
  expect(res2Body.length).toBe(0);
});
