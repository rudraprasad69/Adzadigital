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
      } as unknown as MediaQueryList
    }
  } else {
    // Only patch the prototype if necessary, do not wrap the function
    try {
      const mql = window.matchMedia("(min-width: 1px)")
      const mqlProto = Object.getPrototypeOf(mql)
      
      if (!mqlProto.addEventListener && mqlProto.addListener) {
        mqlProto.addEventListener = function(type: string, listener: any) {
          if (type === 'change') this.addListener(listener)
        }
      }
      if (!mqlProto.removeEventListener && mqlProto.removeListener) {
        mqlProto.removeEventListener = function(type: string, listener: any) {
          if (type === 'change') this.removeListener(listener)
        }
      }
      if (!mqlProto.addListener && mqlProto.addEventListener) {
        mqlProto.addListener = function(listener: any) {
          this.addEventListener('change', listener)
        }
      }
      if (!mqlProto.removeListener && mqlProto.removeEventListener) {
        mqlProto.removeListener = function(listener: any) {
          this.removeEventListener('change', listener)
        }
      }
    } catch (e) {
      console.warn("Failed to polyfill matchMedia prototype:", e)
    }
  }
}

export default function MatchMediaPolyfill() {
  return null
}
