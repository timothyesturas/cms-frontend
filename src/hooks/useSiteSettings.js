
import { useEffect, useState } from 'react';
import { getSettings } from '../services/settings.service';

const DEFAULT_SETTINGS = {
  siteName: 'Bantay Matanda',
  tagline: 'Caring for our elderly community',
  primaryColor: '#245C4F',
  secondaryColor: '#E8B86D',
  backgroundColor: '#F7F4EC',
};

function applyBrandColors(settings) {
  const root = document.documentElement;

  root.style.setProperty(
    '--brand-primary',
    settings.primaryColor,
  );

  root.style.setProperty(
    '--brand-secondary',
    settings.secondaryColor,
  );

  root.style.setProperty(
    '--brand-background',
    settings.backgroundColor,
  );
}

export function useSiteSettings() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadSettings() {
      try {
        const data = await getSettings();

        if (cancelled) return;

        const updatedSettings = {
          ...DEFAULT_SETTINGS,
          ...data,
        };

        setSettings(updatedSettings);
        applyBrandColors(updatedSettings);
        setError('');
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : 'Unable to load website settings.',
          );

          // Keep the default branding if the API is unavailable.
          applyBrandColors(DEFAULT_SETTINGS);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadSettings();

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    settings,
    isLoading,
    error,
  };
}
