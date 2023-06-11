import React from "react";
import Image from "next/image";
import envelopeImg from "@/assets/images/invite.svg";
import coinImg from "@/assets/images/collect-coins.svg";
import giftImg from "@/assets/images/voucher.svg";
import Steps from "./Steps";

export default function StepCount() {
  return (
    <section className="section__step">
      <Steps
        stepNumber={1}
        stepTitle="Invite friends"
        stepDescription="Refer friends with your unique referral link."
        image={
          <Image
            src={envelopeImg}
            alt="Invite"
            height="0"
            width="0"
            style={{ height: "auto" }}
          />
        }
      />
      <Steps
        isReversed
        stepNumber={2}
        stepTitle="Collect coins"
        stepDescription="   Get 1 coin for each friend that installs our extension using your
        referral link."
        image={
          <Image
            src={coinImg}
            alt="Coin"
            height="0"
            width="0"
            style={{ height: "auto" }}
          />
        }
      />
      <Steps
        stepNumber={3}
        stepTitle="Get voucher"
        stepDescription="Redeem for a $20 hotel booking voucher once you collect 20 coins."
        image={
          <Image
            src={giftImg}
            alt="Voucher"
            height="0"
            width="0"
            style={{ height: "auto" }}
          />
        }
      />
    </section>
  );
}
