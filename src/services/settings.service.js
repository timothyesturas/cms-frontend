const API_URL = '/api/settings';

export async function getSettings() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load website settings.');
  }

  return response.json();
}
