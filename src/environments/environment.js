
const environment = {

  production: import.meta.env.PROD,
  
  api_url: import.meta.env.VITE_API_URL,
  app_url: import.meta.env.VITE_APP_URL,
  google_client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,

  // Feature Flags
  is_staging: false,
};

export default environment;