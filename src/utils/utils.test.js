import { getClosestRegion, getRegionByName } from "./index";

describe("utils", () => {
  const userLocation = {
    latitude: 50.11,
    longitude: 8.68
  };

  describe("getClosestRegion", () => {
    it("should send me to Europe", () => {
      const region = getClosestRegion(userLocation);

      expect(region.name).toBe("europe");
    });
    it("should no send me to North America", () => {
      const region = getClosestRegion(userLocation);

      expect(region.name).not.toBe("north america");
    });
    it("should calculate the distance from the user Location", () => {
      const region = getClosestRegion(userLocation);

      expect(region).toHaveProperty("distance");
    });
    it("should not return a valid region object", () => {
      const region = getClosestRegion();

      expect(region).toBe(null);
    });
  });

  describe("getRegionByName", () => {
    it("should give me the coordinats of europe", () => {
      const region = getRegionByName("europe");

      expect(region.name).toBe("europe");
      expect(region.latitude).toBe(51);
      expect(region.longitude).toBe(10);
      expect(region.zoom).toBe(3.5);
    });
    it("should return undefined for antartica", () => {
      const region = getRegionByName("antartica");

      expect(region).toBe(undefined);
    });
  });
});
