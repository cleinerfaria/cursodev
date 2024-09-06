test("GET to /api/v1/status return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const resBody = await res.json();
  expect(resBody.updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(resBody.updated_at).toISOString();
  expect(resBody.updated_at).toEqual(parsedUpdatedAt);
});
