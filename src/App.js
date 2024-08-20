import React, { useState } from 'react';
import MermaidDiagram from './MermaidDiagram';
import { diagrams } from './diagrams';

export default function App() {
  const [selectedDiagram, setSelectedDiagram] = useState(null);

  return (
    <div className="p-4 max-w-full"> {/* Mobile-first design with padding */}
      <h1 className="text-xl font-bold mb-4">Mermaid Diagram Selector</h1> {/* Mobile-first text size */}
      <div className="mb-4">
        <select 
          className="w-full p-2 border rounded" 
          onChange={(e) => setSelectedDiagram(diagrams.find(d => d.id === e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>Select a diagram</option>
          {diagrams.map(diagram => (
            <option key={diagram.id} value={diagram.id}>
              {diagram.title}
            </option>
          ))}
        </select>
      </div>
      {selectedDiagram && (
        <div>
          <h2 className="text-lg font-semibold mb-2">{selectedDiagram.title}</h2>
          <div className="overflow-x-auto"> {/* Scrollable on small screens */}
            <MermaidDiagram chart={selectedDiagram.chart} />
          </div>
        </div>
      )}
    </div>
  );
}
