// Dark Mode Toggle Script for LODA
(function() {
  'use strict';
  
  const STORAGE_KEY = 'loda-theme-preference';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const THEME_AUTO = 'auto';
  
  // Get current theme preference
  function getThemePreference() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return stored;
    }
    return THEME_AUTO;
  }
  
  // Get effective theme (resolving 'auto' to actual theme)
  function getEffectiveTheme(preference) {
    if (preference === THEME_AUTO) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT;
    }
    return preference;
  }
  
  // Apply theme to document
  function applyTheme(theme) {
    const effectiveTheme = getEffectiveTheme(theme);
    document.documentElement.setAttribute('data-theme', effectiveTheme);
    
    // Update highlight.js theme
    updateHighlightTheme(effectiveTheme);
    
    // Update toggle button icon
    updateToggleIcon(theme);
  }
  
  // Update Highlight.js theme
  function updateHighlightTheme(theme) {
    const oldLink = document.querySelector('link[href*="highlight.js"]');
    if (oldLink) {
      const newTheme = theme === THEME_DARK ? 'github-dark' : 'github';
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/${newTheme}.min.css`;
      oldLink.parentNode.insertBefore(newLink, oldLink.nextSibling);
      oldLink.remove();
    }
  }
  
  // Update toggle button icon
  function updateToggleIcon(preference) {
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    
    let icon = '☀️'; // sun (light mode)
    let title = 'Switch to dark mode';
    
    if (preference === THEME_AUTO) {
      icon = '🌓'; // first quarter moon (auto)
      const effective = getEffectiveTheme(preference);
      title = `Auto (currently ${effective})`;
    } else if (preference === THEME_DARK) {
      icon = '🌙'; // moon (dark mode)
      title = 'Switch to light mode';
    }
    
    button.innerHTML = icon;
    button.setAttribute('title', title);
    button.setAttribute('aria-label', title);
  }
  
  // Cycle through themes: auto -> light -> dark -> auto
  function cycleTheme() {
    const current = getThemePreference();
    let next;
    
    if (current === THEME_AUTO) {
      next = THEME_LIGHT;
    } else if (current === THEME_LIGHT) {
      next = THEME_DARK;
    } else {
      next = THEME_AUTO;
    }
    
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }
  
  // Initialize theme on page load
  function init() {
    const preference = getThemePreference();
    applyTheme(preference);
    
    // Add toggle button to header
    const header = document.querySelector('.site-header');
    if (header) {
      // Check if button already exists
      let button = header.querySelector('.theme-toggle');
      if (!button) {
        button = document.createElement('button');
        button.className = 'theme-toggle';
        button.onclick = cycleTheme;
        
        // Try to add to nav, or directly to header wrapper
        const nav = header.querySelector('.site-nav');
        if (nav) {
          nav.appendChild(button);
        } else {
          const wrapper = header.querySelector('.wrapper');
          if (wrapper) {
            wrapper.appendChild(button);
          }
        }
      }
      updateToggleIcon(preference);
    }
    
    // Listen for system theme changes when in auto mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addListener(() => {
      const currentPreference = getThemePreference();
      if (currentPreference === THEME_AUTO) {
        applyTheme(THEME_AUTO);
      }
    });
  }
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
