"use client"
import { useState } from 'react';
import DemoTab from "./DemoTab";
import SelfGuidedDemo from "./SelfGuidedDemo";
import GuidedDemo from "./GuidedDemo";

const DemoBox = ({ c }) => {
  const self = c.demoOptions.selfGuided;
  const p = c.demoOptions.personalized;

  // State to track the active tab
  const [activeTab, setActiveTab] = useState('self');

  // Event handlers to change the active tab
  const handleSelfClick = () => setActiveTab('self');
  const handlePersonalizedClick = () => setActiveTab('personalized');

  return (
    <div className='py-45 md:py-60 lg:py-90 mx-auto container'>
      <div className="grid grid-cols-2 text-white justify-items-center demo-form_tabSelectorSection">
        <div 
          className={`demo-form_tabSelector ${activeTab === 'self' ? 'active' : ''}`} 
          onClick={handleSelfClick}
        >
         <h4 className={`${self.titleClass ? self.titleClass : ''} mx-auto text-center font-semibold pt-15 pb-15`}>

            {self.descriptionFields.demoTitle}
          </h4>
        </div>
        <div 
          className={`demo-form_tabSelector ${activeTab === 'personalized' ? 'active' : ''}`} 
          onClick={handlePersonalizedClick}
        >
         <h4 className={`${p.titleClass ? p.titleClass : ''} mx-auto text-center font-semibold pt-15 pb-15`}>
            {p.descriptionFields.demoTitle}
          </h4>
        </div>
      </div>
      <div className="demo-form_demoTabs">
        {activeTab === 'self' && (
          <div className={`${self.containerClass? self.containerClass: ''} demo-form_demoTab grid grid-cols-2 max-lg:grid-cols-1 pt-45 gap-10`}>
 

            <DemoTab c={self.descriptionFields} style={self.titleClass}/>
            <div className='bg-white/[.9] p-32 rounded-lg md:ml-30 lg:ml-90 ml-0'>
            <SelfGuidedDemo />

            </div>
            
          </div>
        )}
        {activeTab === 'personalized' && (
          <div className={`${p.containerClass? p.containerClass: ''} demo-form_demoTab grid grid-cols-2 max-lg:grid-cols-1 pt-45`}>
            <DemoTab c={p.descriptionFields} style={p.titleClass}/>
            <GuidedDemo />
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoBox;

