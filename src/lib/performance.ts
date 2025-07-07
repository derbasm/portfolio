/**
 * Performance monitoring utilities
 */

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory: PerformanceMemory;
}

export function measurePerformance() {
  if (typeof window === "undefined") return;

  // Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === "largest-contentful-paint") {
        console.log("LCP:", entry.startTime);
      }
      
      if (entry.entryType === "first-input") {
        const fidEntry = entry as PerformanceEventTiming;
        console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
      }
      
      if (entry.entryType === "layout-shift") {
        const clsEntry = entry as LayoutShiftEntry;
        if (!clsEntry.hadRecentInput) {
          console.log("CLS:", clsEntry.value);
        }
      }
    }
  });

  try {
    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] });
  } catch {
    // Fallback for browsers that don't support all entry types
    console.log("Performance observation not fully supported");
  }
}

// Memory usage monitoring (development only)
export function logMemoryUsage() {
  if (process.env.NODE_ENV === "development" && "memory" in performance) {
    const memory = (performance as PerformanceWithMemory).memory;
    console.log({
      usedJSHeapSize: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      totalJSHeapSize: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
    });
  }
}
