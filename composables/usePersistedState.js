// composables/usePersistedState.js
export function usePersistedState(key, defaultValue) {
  // Ensure we are running in a browser environment before accessing sessionStorage
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return useState(key, () => defaultValue);
  }

  // Get value from sessionStorage if it exists
  const storedValue = sessionStorage.getItem(key);
  const state = useState(key, () => {
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  // Watch for state changes and update sessionStorage
  watch(state, (newValue) => {
    sessionStorage.setItem(key, JSON.stringify(newValue));
  });

  return state;
}

  
  /* // composables/usePersistedState.js
export function usePersistedState(key, defaultValue) {
  // Only run on the client side
  if (process.client) {
    // Get value from sessionStorage if it exists
    const storedValue = sessionStorage.getItem(key);
    const state = useState(key, () => {
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    });

    // Watch for state changes and update sessionStorage
    watch(state, (newValue) => {
      sessionStorage.setItem(key, JSON.stringify(newValue));
    });

    return state;
  } else {
    // Return a default value if running on server-side
    return useState(key, () => defaultValue);
  }
}
 */