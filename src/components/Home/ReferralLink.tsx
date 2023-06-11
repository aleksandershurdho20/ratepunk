import Image from 'next/image';
import checkedImg from '@/assets/images/success.svg';

interface referralLinkPropsType {
  referralLink: string;
}

export default function ReferralLink(props: referralLinkPropsType) {
  const { referralLink } = props;
  return (
    <div className='container--box'>
      <div className='confirm--message'>
        <Image
          className='envelope'
          src={checkedImg}
          alt='checked'
          width='0'
          height='0'
          style={{ height: 'auto' }}
        />
        <p>Your email is confirmed!</p>
      </div>
      <div className='referral--box'>
        <p className='referral--link'>{referralLink}</p>
        <button>Copy</button>
      </div>
    </div>
  );
}
