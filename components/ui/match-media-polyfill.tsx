"use client"

if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = function (query) {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: function () {},
        removeListener: function () {},
        addEventListener: function () {},
        removeEventListener: function () {},
        dispatchEvent: function () {
          return false
        },
      }
    }
  } else {
    try {
      const originalMatchMedia = window.matchMedia
      window.matchMedia = function (query) {
        try {
          const mql = originalMatchMedia.call(window, query)
          if (!mql) {
            return {
              matches: false,
              media: query,
              onchange: null,
              addListener: function () {},
              removeListener: function () {},
              addEventListener: function () {},
              removeEventListener: function () {},
              dispatchEvent: function () {
                return false
              },
            }
          }
          // Ensure all listener methods exist
          if (!mql.addListener) mql.addListener = function () {}
          if (!mql.removeListener) mql.removeListener = function () {}
          if (!mql.addEventListener) mql.addEventListener = function () {}
          if (!mql.removeEventListener) mql.removeEventListener = function () {}
          return mql
        } catch (e) {
          return {
            matches: false,
            media: query,
            onchange: null,
            addListener: function () {},
            removeListener: function () {},
            addEventListener: function () {},
            removeEventListener: function () {},
            dispatchEvent: function () {
              return false
            },
          }
        }
      }
    } catch (e) {
      console.warn("Failed to polyfill matchMedia:", e)
    }
  }
}

export default function MatchMediaPolyfill() {
  return null
}
