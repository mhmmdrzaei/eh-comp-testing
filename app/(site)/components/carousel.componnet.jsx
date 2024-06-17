// Component for first blade of home page

'use client';

import { useState, useEffect } from 'react';

import styles from '../../styles/hero-carousel.module.scss'

export default function SMCarousel({ c }) {

  const [lockedTabs, lockTabs] = useState(false);
  const [currTab, changeCurrTab] = useState(0); // Start page on first tab of carousel
  const [prevTab, changePrevTab] = useState(-1); // Start page with no previous tab
  const [currTabBar, setCurrTabBar] = useState(-1); // Start with no current tab bar active
                                                    // so that first tab bar starts empty

  // Wait until after initial component render to set active tab bar that auto-fills
  useEffect(() => {
    setCurrTabBar(currTab);
  }, []);


  // timer function that fills blue bar and then changes tab once full
  useEffect(() => {

    // Timer is cancelled once tab bars are "locked"
    if (lockedTabs) {
      return;
    }
    
    const tabChangeInterval = setInterval(() => {changeTab((currTab + 1) % 3)}, 5000);

    return () => {
      clearInterval(tabChangeInterval);
    }
  });


  // When user selects a tab manually, lock tabs from auto-rotating, then change tab
  function lockAndChange(index) {

    if (!lockedTabs) {
      lockTabs(true);
    }
    
    changeTab(index);
  }


  // Update variables affecting which tab of the carousel is active
  function changeTab(index) {

    if (index !== currTab) {
      // deactivate currTab
      changePrevTab(currTab);
      changeCurrTab(-1);

      // activate new tab bar
      setCurrTabBar(index);

      setTimeout( () => {
        changeCurrTab(index);
        changePrevTab(-1);
      },250);
    }
  }


  return (
    <div className={styles.carouselQuotes}>
      <div className=" mx-auto ">
        <section id={styles.carouselTabs}>
        { c.staffTestiCont.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.carouselItem} ${index == prevTab ? styles.deactivate : index == currTab ? styles.active : ""} flex justify-between`}
          >
            <div>
            <h4 className={`${styles.heading} mb-24 leading-tight font-bold`}>{item.staffQuote}</h4>
            <p className={`${styles.subheading} body-sm text-black/[.5] text-semi-bold`}>{item.staffAttri}</p>

            </div>
          </div>
        ))}
        </section>
        <div id={styles.tabSelection} className="grid grid-cols-3 gap-30">
          { c.staffTestiCont.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.tabSelector} ${index == currTabBar ? styles.active : ""}`} 
              onClick={() => lockAndChange(index)}
            >
              <div className={styles.tabBar}>
                <hr className={`${styles.tabBarFill} bg-cyan ${lockedTabs && styles.locked}`}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
