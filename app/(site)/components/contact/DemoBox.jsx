"use client"
import { useState } from 'react';
import DemoTab from "./DemoTab";
import SelfGuidedDemo from "./SelfGuidedDemo";
import GuidedDemo from "./GuidedDemo";
import styles from './demo-container.module.scss';

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
      <div className={`${styles.demoFormTabSelector} grid grid-cols-2 text-white justify-items-center demo-form_tabSelectorSection `}>
        <div 
          className={`${activeTab === 'self' ? `${styles.active}` : ''} demo-form_tabSelector cursor-pointer	`} 
          onClick={handleSelfClick}
        >
         <h4 className={`${self.titleClass ? self.titleClass : ''} mx-auto text-center font-semibold pt-15 pb-15`}>

            {self.descriptionFields.demoTitle}
          </h4>
        </div>
        <div 
          className={`${activeTab === 'personalized' ? `${styles.active}` : ''} demo-form_tabSelector cursor-pointer`} 
          onClick={handlePersonalizedClick}
        >
         <h4 className={`${p.titleClass ? p.titleClass : ''} mx-auto text-center font-semibold pt-15 pb-15`}>
            {p.descriptionFields.demoTitle}
          </h4>
        </div>
      </div>
      <div className="demo-form_demoTabs">
        {activeTab === 'self' && (
          <div className={`${self.containerClass? self.containerClass: ''} demo-form_demoTab grid md:grid-cols-2 grid-cols-1 pt-60 gap-10`}>
 

            <DemoTab c={self.descriptionFields} style={self.titleClass}/>
            <div className='bg-white/[.9]  rounded-xl lg:ml-50 xl:ml-90 max-lg:mt-45 overflow-hidden	'>
            <h5 className='text-body font-semi-bold px-32 py-16 text-white  bg-gradient'>Access the demo</h5>
            <div className="demoBox p-32">
            <SelfGuidedDemo />

            </div>
           

            </div>
            
          </div>
        )}
        {activeTab === 'personalized' && (
          <div className={`${p.containerClass? p.containerClass: ''} demo-form_demoTab grid md:grid-cols-2 grid-cols-1 pt-60 gap-10`}>
            <DemoTab c={p.descriptionFields} style={p.titleClass}/>
            <div className='bg-white/[.9]  rounded-xl lg:ml-50 xl:ml-90 max-lg:mt-45 overflow-hidden	'>
            <h5 className='text-body font-semi-bold px-32 py-16 text-white  bg-gradient'>Access the demo</h5>
            <div className="demoBox p-32">
            <GuidedDemo />

            </div>
           

            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoBox;

