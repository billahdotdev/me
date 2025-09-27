'use client';

import { useState } from 'react';

export default function TestUserWebsite() {
  const [activeTest, setActiveTest] = useState(null);
  const [testResults, setTestResults] = useState({});
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const tests = [
    {
      id: 'speed-test',
      title: 'Website Speed Test',
      description: 'See how fast your website loads',
      icon: '⚡',
      steps: [
        'Analyzing HTML',
        'Checking CSS',
        'Testing JavaScript',
        'Measuring Performance',
      ],
      result: 'Your website loads in 0.8s - Excellent!',
    },
    {
      id: 'mobile-test',
      title: 'Mobile Responsiveness',
      description: 'Test how your site looks on mobile',
      icon: '📱',
      steps: [
        'Testing Phone View',
        'Checking Tablet View',
        'Analyzing Touch Elements',
        'Validating Layout',
      ],
      result: '100% Mobile Friendly - Perfect!',
    },
    {
      id: 'seo-test',
      title: 'SEO Analysis',
      description: 'Check your search engine optimization',
      icon: '🔍',
      steps: [
        'Scanning Meta Tags',
        'Checking Headers',
        'Analyzing Keywords',
        'Testing Structure',
      ],
      result: 'SEO Score: 95/100 - Outstanding!',
    },
    {
      id: 'accessibility-test',
      title: 'Accessibility Check',
      description: 'Ensure your site is accessible to everyone',
      icon: '♿',
      steps: [
        'Testing Screen Readers',
        'Checking Color Contrast',
        'Validating Navigation',
        'Testing Keyboard Access',
      ],
      result: 'Accessibility Score: 98/100 - Excellent!',
    },
  ];

  const runTest = (testId) => {
    if (isRunning) return;

    setActiveTest(testId);
    setIsRunning(true);
    setCurrentStep(0);

    const test = tests.find((t) => t.id === testId);
    const stepDuration = 800;

    test.steps.forEach((_, index) => {
      setTimeout(() => {
        setCurrentStep(index + 1);
      }, (index + 1) * stepDuration);
    });

    setTimeout(() => {
      setTestResults((prev) => ({
        ...prev,
        [testId]: test.result,
      }));
      setIsRunning(false);
      setCurrentStep(0);
    }, test.steps.length * stepDuration + 500);
  };

  const resetTests = () => {
    setTestResults({});
    setActiveTest(null);
    setIsRunning(false);
    setCurrentStep(0);
  };

  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-foreground animate-fade-in-up">
            Test Your Website
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
            Try out these interactive tools to see how I analyze and improve
            websites. Click any test below to see the magic happen!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {tests.map((test, index) => (
            <div
              key={test.id}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer hover-lift animate-fade-in-up ${
                activeTest === test.id && isRunning
                  ? 'border-accent bg-accent/5 scale-105'
                  : testResults[test.id]
                  ? 'border-green-500/50 bg-green-500/5'
                  : 'border-border hover:border-accent/50 hover:bg-surface/50'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              onClick={() => runTest(test.id)}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`text-3xl transition-transform duration-300 ${
                      activeTest === test.id && isRunning
                        ? 'animate-bounce'
                        : 'group-hover:scale-110'
                    }`}
                  >
                    {test.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                      {test.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {test.description}
                    </p>
                  </div>
                </div>

                {/* Progress indicator */}
                {activeTest === test.id && isRunning && (
                  <div className="mt-6">
                    <div className="flex justify-between text-xs text-muted-foreground mb-2">
                      <span>Running test...</span>
                      <span>
                        {currentStep}/{test.steps.length}
                      </span>
                    </div>
                    <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-300 rounded-full"
                        style={{
                          width: `${(currentStep / test.steps.length) * 100}%`,
                        }}
                      />
                    </div>
                    {currentStep > 0 && currentStep <= test.steps.length && (
                      <p className="text-xs text-accent mt-2 animate-fade-in">
                        {test.steps[currentStep - 1]}...
                      </p>
                    )}
                  </div>
                )}

                {/* Result */}
                {testResults[test.id] && !isRunning && (
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm font-medium text-green-500">
                        {testResults[test.id]}
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="text-center space-y-4">
          {Object.keys(testResults).length > 0 && (
            <button
              onClick={resetTests}
              className="inline-flex items-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border rounded-xl text-sm font-medium text-foreground transition-all duration-200 hover-lift"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M3 21v-5h5" />
              </svg>
              Reset Tests
            </button>
          )}

          <div className="text-sm text-muted-foreground">
            <p>
              Want these tools for your website? Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
