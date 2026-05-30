import assert from "node:assert/strict";
import test from "node:test";

import { createSiteConfig } from "../site-config.mjs";

test("uses Tyeblog project Pages defaults", () => {
  const config = createSiteConfig({});

  assert.equal(config.site, "https://YOUR_GITHUB_USERNAME.github.io");
  assert.equal(config.base, "/Tyeblog");
});

test("allows deployment settings to be overridden", () => {
  const config = createSiteConfig({
    SITE_URL: "https://notes.example.com/",
    BASE_PATH: "/garden/",
  });

  assert.equal(config.site, "https://notes.example.com");
  assert.equal(config.base, "/garden");
});

test("supports root deployments", () => {
  const config = createSiteConfig({
    SITE_URL: "https://notes.example.com",
    BASE_PATH: "/",
  });

  assert.equal(config.base, "/");
});
