import assert from "node:assert/strict";
import { test } from "node:test";

for (const section of ["acolhimento", "familia", "tratamento"]) {
  test(`/${section} permanently redirects to its Araraquara section`, async () => {
    for (const method of ["GET", "HEAD"]) {
      const response = await fetch(`http://localhost:8080/${section}`, {
        method,
        redirect: "manual",
      });
      assert.equal(response.status, 301);
      assert.equal(response.headers.get("location"), `/clinica-de-recuperacao-em-araraquara#${section}`);
    }
  });
}