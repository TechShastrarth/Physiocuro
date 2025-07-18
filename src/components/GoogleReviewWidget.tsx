'use client';

import React, { useEffect } from "react";

interface GoogleReviewWidgetProps {}

const GoogleReviewWidget: React.FC<GoogleReviewWidgetProps> = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-aed35cae-9d2e-4fd1-96f8-fc3c410279d1 bg-white py-10 sm:px-0 px-10"
      data-elfsight-app-lazy
    ></div>
  );
};

export default GoogleReviewWidget;
