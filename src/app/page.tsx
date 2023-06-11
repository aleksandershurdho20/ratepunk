"use client"; // This is a client component 👈🏽
import Header from "@/shared/Header/Header"
import '@/styles/global.scss';
import { useState } from 'react';
import ReferralLink from "@/components/Home/ReferralLink";
import GetReFerralLink from "@/components/Home/GetReFerralLink";
import StepCount from "@/components/Home/StepCount";
import Store from "@/components/Home/Store";
import Footer from "@/shared/Footer/Footer";


export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralLink, setReferralLink] = useState<string>();
  const submitHandler = () => {
    setIsSubmitted(true);
    //Send email and get Referral Link here
    setReferralLink('https://ratepunk.com/referral');
  };
  return (
    <div className="app">
    <Header/>
    <div className='main'>
      <div className='container'>
        <section className='section__cta'>
          <div className='section__cta--box'>
            <h1 className='cta--heading'>Refer friends and get rewards</h1>
            <p className='cta--description'>
              Refer your friends to us and earn hotel booking vouchers. We'll
              give you 1 coin for each friend that installs our extension.
              Minimum cash-out at 20 coins.
            </p>
            {!isSubmitted && <GetReFerralLink onSubmit={submitHandler} />}

            {isSubmitted && referralLink && (
              <ReferralLink referralLink={referralLink} />
            )}
            <p className='cta--limit--text'>Limits on max rewards apply.</p>
          </div>
        </section>
        <StepCount/>
      </div>
    </div>
    <Store/>
    <Footer/>
  </div>
  )
}
