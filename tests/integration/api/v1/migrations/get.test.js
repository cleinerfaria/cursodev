import database from "infra/database.js";

test("GET to /api/v1/migrations return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "GET",
  });
  console.log(process.env.NODE_ENV);
  console.log(process.env.POSTGRES_HOST);
  expect(res.status).toBe(200);

  const resBody = await res.json();
  console.log(resBody);

  expect(Array.isArray(resBody)).toBe(true);
  expect(resBody.length).toBeGreaterThan(0);
});
