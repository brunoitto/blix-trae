import { useState, useEffect, useCallback } from 'react';

interface AnalyticsData {
  sectionTimes: Record<string, number>;
  buttonClicks: Record<string, number>;
  scrollDepth: number;
  sessionStart: number;
  interactions: Array<{
    type: 'section_view' | 'button_click' | 'scroll';
    section?: string;
    timestamp: number;
    data?: any;
  }>;
}

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>(() => {
    const saved = localStorage.getItem('proposal-analytics');
    return saved ? JSON.parse(saved) : {
      sectionTimes: {},
      buttonClicks: {},
      scrollDepth: 0,
      sessionStart: Date.now(),
      interactions: []
    };
  });

  const [currentSection, setCurrentSection] = useState<string>('');
  const [sectionStartTime, setSectionStartTime] = useState<number>(Date.now());

  // Save analytics to localStorage
  useEffect(() => {
    localStorage.setItem('proposal-analytics', JSON.stringify(analytics));
  }, [analytics]);

  // Track section time
  const trackSectionView = useCallback((sectionId: string) => {
    if (currentSection && currentSection !== sectionId) {
      const timeSpent = Date.now() - sectionStartTime;
      setAnalytics(prev => ({
        ...prev,
        sectionTimes: {
          ...prev.sectionTimes,
          [currentSection]: (prev.sectionTimes[currentSection] || 0) + timeSpent
        },
        interactions: [...prev.interactions, {
          type: 'section_view',
          section: sectionId,
          timestamp: Date.now()
        }]
      }));
    }
    setCurrentSection(sectionId);
    setSectionStartTime(Date.now());
  }, [currentSection, sectionStartTime]);

  // Track button clicks
  const trackButtonClick = useCallback((buttonId: string, section?: string) => {
    setAnalytics(prev => ({
      ...prev,
      buttonClicks: {
        ...prev.buttonClicks,
        [buttonId]: (prev.buttonClicks[buttonId] || 0) + 1
      },
      interactions: [...prev.interactions, {
        type: 'button_click',
        section,
        timestamp: Date.now(),
        data: { buttonId }
      }]
    }));
  }, []);

  // Track scroll depth
  const trackScroll = useCallback(() => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );
    
    if (scrollPercent > analytics.scrollDepth) {
      setAnalytics(prev => ({
        ...prev,
        scrollDepth: scrollPercent,
        interactions: [...prev.interactions, {
          type: 'scroll',
          timestamp: Date.now(),
          data: { depth: scrollPercent }
        }]
      }));
    }
  }, [analytics.scrollDepth]);

  // Export analytics data
  const exportAnalytics = useCallback(() => {
    const blob = new Blob([JSON.stringify(analytics, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `proposal-analytics-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [analytics]);

  return {
    analytics,
    trackSectionView,
    trackButtonClick,
    trackScroll,
    exportAnalytics
  };
};