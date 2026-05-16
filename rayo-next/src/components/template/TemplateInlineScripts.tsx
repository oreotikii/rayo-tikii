'use client';

import { useEffect } from 'react';

type TemplateInlineScriptsProps = {
  scripts: string[];
};

function canRunTemplateScripts() {
  return (
    typeof window !== 'undefined' &&
    'countUp' in window &&
    'optionsPlus' in window
  );
}

export default function TemplateInlineScripts({
  scripts,
}: TemplateInlineScriptsProps) {
  useEffect(() => {
    if (scripts.length === 0) return;

    let attempts = 0;
    let timeoutId: number | undefined;

    const run = () => {
      attempts += 1;

      if (!canRunTemplateScripts() && attempts < 80) {
        timeoutId = window.setTimeout(run, 100);
        return;
      }

      scripts.forEach((script) => {
        window.Function(script)();
      });
    };

    run();

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [scripts]);

  return null;
}
