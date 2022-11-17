import { getApiClient } from './axios';

// esse 'api' encapsula o getApiClient, pra poder passar o ctx só quando for pegar cookie pelo 'server'
// nas chamadas a partir do browser = 'const apiClient = getApiClient()'
// nas chamadas pelo server = "const apiClient = getApiClient(ctx)""
export const api = getApiClient();
