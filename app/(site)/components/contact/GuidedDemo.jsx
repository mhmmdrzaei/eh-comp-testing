// Form component for guided demo request

'use client';

import { useState, useEffect } from 'react';
import CountryOptions from './CountryOptions';
import styles from './form.module.scss';
import buttonStyles from './button.module.scss'

const GuidedDemo = ({}) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        title: "",
        emailAddress: "",
        phone: "",
        country: "",
        company: "",
        what_problem: "",
        explicitOptIn1: true
    });

    const [url, setUrl] = useState("")
    const [utmData, setUtmData] = useState({
        utm_campaign: "",
        utm_content: "",
        utm_term:"",
        utm_medium: "",
        utm_source: "",
        cid: "",
        uid: "",

    });

    const setUtmFormInputs = () => {
        const utmParams = {};
        const cookieString = document.cookie
        const cookieParts = cookieString.split(';');
        for (const part of cookieParts) {
            const [key, value] = part.trim().split('=');
            if (key === 'utmData') {
                try {
                    const parsedData = JSON.parse(value);
                    for (const [key, value] of Object.entries(parsedData)) {
                        utmParams[key] = value;
                    }
                } catch (error) {
                    console.error('Error parsing utmData cookie:', error);
                }
                break; // Stop iterating after finding utmData
            }
        }
        setUtmData(utmParams);

    }

 


   
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };


    // Update field when user makes a change to a checkbox
    const handleCheckbox = (event) => {
        const { name, checked } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: checked }));
    };

    useEffect(() => {
        const urlAfterLoad = new URL(window.location.href); // Get current URL
        setUrl(urlAfterLoad.pathname)
        setUtmFormInputs()
    }, [])

    return (
        <form method="POST" className={styles.form} id="form512" name="2022gdemo" role="form" action="https://s1701.t.eloqua.com/e/f2">

            <div>
            <input type="hidden" name="elqSiteId" value="1701" />
                <input type="hidden" name="elqCampaignId" value={utmData.cid}/>
                <input type="hidden" name="elqCustomerGUID" />
                <input type="hidden" name="elqCookieWrite" value="0" />
                <input type="hidden" name="CampaignMemberStatus" value="" />
                <input type="hidden" name="sFDCLastCampaignID" value="" />
                <input type="hidden" name="GA_Medium" value={utmData.utm_medium} />
                <input type="hidden" name="GA_Source" value={utmData.utm_source} />
                <input type="hidden" name="GA_Campaign" value={utmData.utm_campaign} />
                <input type="hidden" name="GA_Content" value="" />
                <input type="hidden" name="GA_Term" value={utmData.utm_term} />
                <input type="hidden" name="GA_Product" value="" />
                <input type="hidden" name="GA_Region" value="" />
                <input type="hidden" name="GA_Funnelstage" value="" />
                <input type="hidden" name="GA_Version" value="" />
                <input type="hidden" name="FormURL" value={url} />
                <input type="hidden" name="uniqueid" value={utmData.uid} />
                <input type="hidden" name="GA_Adgroup" value="" />
                <input type="hidden" name="ipAddress" value="" />
                <input type="hidden" name="ipAddressCountry" value="" />

                <input type="hidden" name="elqFormName" value="2022gdemo" />
                <input type="hidden" name="redirectUrl" value="https://www.extrahop.com/demo-success/" />
                <input type="hidden" name="campaignId" value="7016R000000HAToQAO" />

            </div>

            <p className="pb-15 font-semibold">Who should we contact?</p>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>First name</p>
                <input id="guided-firstName" className="form-control" name="firstName" type="text" required value={formData.firstName} onChange={handleChange} />
            </div>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Last name</p>
                <input id="guided-lastName" className="form-control" name="lastName" type="text" required value={formData.lastName} onChange={handleChange} />
            </div>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Job title</p>
                <p className={styles.optional}>Optional</p>
                <input id="guided-title" className="form-control" name="title" type="text" value={formData.title} onChange={handleChange} />
            </div>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Business email</p>
                <input id="guided-emailAddress" className="form-control" name="emailAddress" type="email" required value={formData.emailAddress} onChange={handleChange} />
            </div>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Phone</p>
                <input id="guided-phone" className="form-control" name="phone" type="text" required value={formData.phone} onChange={handleChange} />
            </div>

            <p className="py-15 font-semibold">Company details</p>

            <div className={`${styles.formField} ${styles.formDropdownSelect}`}>
                <p className={styles.fieldTitle}>Country</p>
                <select id="guided-country" className="form-control" name="country" required value={formData.country} onChange={handleChange}>
                    <CountryOptions />
                </select>
                <img src="https://cloud-assets.extrahop.com/icons/arrows/triangle-cyan.svg" className="h-[8px]" />
            </div>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Company name</p>
                <input id="guided-company" className="form-control" name="company" type="text" required value={formData.company} onChange={handleChange} />
            </div>

            <p className="py-15 font-semibold">Tell us about your project and timelines</p>

            <div className={styles.formField}>
                <p className={styles.fieldTitle}>Additional information</p>
                <p className={styles.optional}>Optional</p>
                <textarea id="guided-what_problem" name="what_problem" maxLength="500" rows="4" data-storage="false" value={formData.what_problem} onChange={handleChange}>
                </textarea>
            </div>

            <div className={`${styles.formCheckbox} text-14`}>
                <label htmlFor="guided-explicitOptIn1" className="flex items-start">
                    <div className="relative">
                        <input type="checkbox" id="guided-explicitOptIn1" name="explicitOptIn1" checked={formData.explicitOptIn1} onChange={handleCheckbox} className="mt-5"/>
                        <div className={`${styles.checkContainer} ${formData.explicitOptIn1 === false && styles.unchecked}`}>
                            <img src="https://cloud-assets.extrahop.com/icons/checkbox.svg" alt="cyan checkmark"/>
                        </div>
                    </div>
                    <div className="pl-25">
                        <p className="pb-15">If you&apos;d like to receive email communications
                        from us, please select the checkbox. You can
                        withdraw your consent at any time.</p>
                        <p className="text-11 text-gray">By submitting my contact information, I consent to ExtraHop contacting me and agree to the ExtraHop <a href="/terms-of-use/">Terms of Use</a> and <a href="/privacy/statement/">Privacy Policy</a></p>
                    </div>
                </label>
            </div>

            <div className="pb-30"></div>

            <div className={`${styles.formSubmitButton} ${buttonStyles.btn} ${buttonStyles.btnBasic} ${buttonStyles.btnCyan}`}>
                <input data-ga-submit type="submit" data-track-form-cta sales-demo-submit_btn="true" value="Schedule my demo" className="font-semibold py-10 px-30 text-h5" />
                <span className={buttonStyles.btnGradient}></span>
                <span></span>
            </div>

        </form>
    )
}

export default GuidedDemo
