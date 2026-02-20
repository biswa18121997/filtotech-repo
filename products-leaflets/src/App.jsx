

import React, { useState } from 'react';
import './App.css';
import './index.css';

// Component Imports
import AirHandlingUnits from './components/AirHandlingUnits';
import AxialFanLeaflet from './components/AxialFlowFan';
import CentrifugalFanLeaflet from './components/CentrifugalFan';
import WetScrubberLeaflet from './components/WetScrubber';
import PassboxLeaflet from './components/Passbox';
import PackagedACLeaflet from './components/PackagedAC';
import DrainTrapLeaflet from './components/DrainTrap';
import AirCurtainLeaflet from './components/AirCurtains';
import LaminarFlowLeaflet from './components/LaminarFlowUnit';
import CleanroomFurnitureLeaflet from './components/CleanRoomFurniture';
import SurgicalScrubLeaflet from './components/SurgicalScrubSink';
import DustCollectorLeaflet from './components/DustCollector';
import DehumidifierLeaflet from './components/Dehumidifier';
import StairwellPressurisationLeaflet from './components/StairwellPressurisationSystems';
import CatalogFrontCover from './components/FrontPage';
import HVACSystemLeaflet from './components/HVACSystems';
function App() {
  const [selected, setSelected] = useState('ALL');

  // Mapping of values to Components
  const componentsMap = [
    { id: 'FRONT', label: 'Front Cover', Component: CatalogFrontCover },
    { id: 'AHU', label: 'Air Handling Units', Component: AirHandlingUnits },
    { id: 'AXIAL', label: 'Axial Flow Fans', Component: AxialFanLeaflet },
    { id: 'CENTRIFUGAL', label: 'Centrifugal Fans', Component: CentrifugalFanLeaflet },
    { id: 'SCRUBBER', label: 'Wet Scrubber', Component: WetScrubberLeaflet },
    { id: 'PASSBOX', label: 'Passbox', Component: PassboxLeaflet },
    { id: 'PAC', label: 'Packaged AC', Component: PackagedACLeaflet },
    { id: 'DRAIN', label: 'Drain Trap', Component: DrainTrapLeaflet },
    { id: 'CURTAIN', label: 'Air Curtains', Component: AirCurtainLeaflet },
    { id: 'LAMINAR', label: 'Laminar Flow Unit', Component: LaminarFlowLeaflet },
    { id: 'FURNITURE', label: 'Cleanroom Furniture', Component: CleanroomFurnitureLeaflet },
    { id: 'SCRUB', label: 'Surgical Scrub Sink', Component: SurgicalScrubLeaflet },
    { id: 'DUST', label: 'Dust Collector', Component: DustCollectorLeaflet },
    { id: 'DEHUMIDIFIER', label: 'Dehumidifier', Component: DehumidifierLeaflet },
    { id: 'STAIRWELL', label: 'Stairwell Pressurisation', Component: StairwellPressurisationLeaflet },
    { id : 'HVAC', label : 'HVAC Systems', Component : HVACSystemLeaflet }
  ];

  return (
    <div className="min-h-screen bg-slate-200">
      {/* TOOLBAR: Hidden during print */}
      <nav className="print:hidden sticky top-0 z-50 bg-slate-900 text-white p-4 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="font-black tracking-tighter text-xl">FILTOTECH <span className="text-blue-400"> Air Control Sysyem Pvt. Ltd.</span></h2>
          
          <select 
            className="bg-slate-800 border border-slate-700 text-sm rounded-lg p-2 focus:ring-blue-500 outline-none"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="ALL">Full Catalog (All Pages)</option>
            {componentsMap.map(item => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </div>

        <button 
          onClick={() => window.print()} 
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm transition-all shadow-lg active:scale-95"
        >
          PRINT SELECTED
        </button>
      </nav>

      {/* RENDER AREA */}
      <div className="py-10 print:p-0">
        {componentsMap.map(({ id, Component }) => {
          // If ALL is selected, show everything. Otherwise, show only the matching ID.
          if (selected === 'ALL' || selected === id) {
            return (
              <div key={id} className="mb-10 print:mb-0">
                <Component />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;