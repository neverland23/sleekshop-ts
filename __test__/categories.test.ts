import SleekShop from '../index';

it("should mock async function - Categories / get_categories", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.getCategories(2, "en_EN");
  expect(data).toMatchObject({ object: "shopcategories" });
});

it("should mock async function - Categories / get_products_in_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.getProductsInCategory(1, "en_EN", "US", "price", "DESC", 0, 1, ["name", "price"]);
  expect(data).toMatchObject({ object: "error" });
});

it("should mock async function - Categories / get_contents_in_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.getContentsInCategory(1, "en_EN", "name", "DESC", 0, 2, ["headline","img"]);
  expect(data).toMatchObject({ object: "error" });
});

it("should mock async function - Categories / get_shopobjects_in_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.getShopObjectsInCategory(1, "en_EN", "US", "price", "DESC", 0, 1, ["name", "price"]);
  expect(data).toMatchObject({ object: "error" });
});

it("should mock async function - Categories / dump_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.dumpCategory(1, "en_EN", "US", "price", "DESC", 0, 1, ["name", "price"]);
  expect(data).toMatchObject({ object: "error" });
});

it("should mock async function - Categories / seo_get_products_in_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.seoGetProductsInCategory("jacken345", "US", "price", "DESC", 0, 1, ["name", "price"]);
  expect(data).toMatchObject({ object: "products_in_category" });
});

it("should mock async function - Categories / delete_category", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.categories.deleteCategory(1000);
  expect(data).toMatchObject({ object: "error" });
});