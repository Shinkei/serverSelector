const baseUrl = process.env.API_BASE_URL

const getRegions = async () => {
  let regions = await fetch(`${baseUrl}getRegions`);
  regions = await regions.json();
  return regions
}

const getServers = async (server = '') => {
  let servers = await fetch(`${baseUrl}getServers/${server}`);
  servers = await servers.json();
  return servers
}


export {getRegions, getServers}