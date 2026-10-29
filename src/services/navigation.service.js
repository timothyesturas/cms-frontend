const API_URL = '/api/navigation';

export async function getNavigationItems() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to load navigation items.');
  }

  return response.json();
}