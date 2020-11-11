const baseUrl = process.env.API_BASE_URL;

/**
 * Service that fetch the API and get all the available regions
 * @returns - Array of objects witht he name of the regions
 */
const getRegions = async () => {
  let regions = await fetch(`${baseUrl}getRegions`);
  regions = await regions.json();
  return regions;
};

/**
 * Service that fetch the servers by region from the API
 * @param {string} server - server name, '' to fetch all
 */
const getServers = async (server = "") => {
  let servers = await fetch(`${baseUrl}getServers/${server}`);
  servers = await servers.json();
  return servers;
};

export { getRegions, getServers };
