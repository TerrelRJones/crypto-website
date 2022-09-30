import { AiOutlineLock, AiOutlinePieChart } from 'react-icons/ai';
import { MdPhoneIphone } from 'react-icons/md';

export type InfoSectionCardDataType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

export const platformInfoSectionCardData: InfoSectionCardDataType[] = [
  {
    icon: <AiOutlinePieChart size="100%" color="#CA8542" />,
    title: 'Portfolio Manager',
    desc: 'Buy and sell popular digital currencies, keep track of them in one place.',
  },
  {
    icon: <MdPhoneIphone size="100%" color="#A558C4" />,
    title: 'Mobile Apps',
    desc: 'Stay on top of the markets with the Cryptolly app for Android or iOS.',
  },
  {
    icon: <AiOutlineLock size="100%" color="#13ADa9" />,
    title: 'Vault Protection',
    desc: 'For added security, store your funds in a vault with time delayed withdrawls.',
  },
];
