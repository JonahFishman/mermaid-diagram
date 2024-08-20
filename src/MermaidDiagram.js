import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidDiagram = ({ chart }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Configure Mermaid.js
    mermaid.initialize({
      startOnLoad: true,
      securityLevel: 'loose',
      theme: 'default',
      flowchart: {
        curve: 'linear',  // Makes lines straight rather than curved
        nodeSpacing: 30,  // Controls horizontal spacing between nodes
        rankSpacing: 30,  // Controls vertical spacing between nodes
      },
    });
    
    if (ref.current) {
      mermaid.render(`mermaid-${Date.now()}`, chart).then(({ svg }) => {
        ref.current.innerHTML = svg;
      });
    }
  }, [chart]);

  return <div ref={ref} className="mermaid-diagram" />;
};

export default MermaidDiagram;
