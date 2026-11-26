import assert from "node:assert/strict";
import { test } from "node:test";
import { facilityGallerySchema, facilityPhotos, femaleGallerySchema, femalePhotos } from "./facility-gallery";

test("every facility photo has a unique alt naming Araraquara SP and Morada do Sol", () => {
  const alts = facilityPhotos.map((item) => item.alt);
  assert.equal(new Set(alts).size, facilityPhotos.length);
  for (const alt of alts) assert.ok(alt.endsWith("Clínica de recuperação em Araraquara SP - Morada do Sol"));
});

test("structured data lists one image object per photo at the confirmed Araraquara address", () => {
  const schema = facilityGallerySchema();
  assert.equal(schema.associatedMedia.length, facilityPhotos.length);
  assert.equal(schema.contentLocation.address.streetAddress, "R. Alfredo Micelli, 70 - Condomínio Satélite");
});

test("female gallery has seven photos with unique alts naming São Carlos SP and no invented address", () => {
  assert.equal(femalePhotos.length, 7);
  assert.equal(new Set(femalePhotos.map((p) => p.alt)).size, 7);
  for (const p of femalePhotos) assert.ok(p.alt.includes("São Carlos SP"));
  const address = femaleGallerySchema().contentLocation.address as Record<string, string>;
  assert.equal(address["streetAddress"], undefined);
});
