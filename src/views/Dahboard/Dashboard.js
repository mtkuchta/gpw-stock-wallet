import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Wrapper } from './Dashboard.style';
import AccountSummary from '../../components/organisms/AccountSummary/AccountSummary';
import WalletSummary from '../../components/organisms/WalletSummary/WalletSummary';
import Statistics from '../../components/organisms/Statistics/Statistics';

const Dashboard = () => {
  const tl = useRef(null);
  const accountSummaryRef = useRef(null);
  const walletSummaryRef = useRef(null);
  const statisticsRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();

    if (tl.current) {
      tl.current.set([accountSummaryRef.current, walletSummaryRef.current, statisticsRef.current], { x: '110%' }).to(
        [accountSummaryRef.current, walletSummaryRef.current, statisticsRef.current],
        { x: '0%', opacity: 1, duration: 0.3, stagger: 0.2, ease: 'power4.out' }
        // '+0.5'
      );
    }
  }, []);

  return (
    <Wrapper>
      <AccountSummary ref={accountSummaryRef} />
      <WalletSummary ref={walletSummaryRef} />
      <Statistics ref={statisticsRef} />
    </Wrapper>
  );
};

export default Dashboard;
