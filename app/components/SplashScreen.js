// components/SplashScreen.js
import { useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';
import cuscLogo from '../../public/cusc-logo.png';

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    });
    loader.add({
      targets: "#logo",
      delay: 0,
      scale: 3,
      duration: 2000,
      easing: "easeInOutExpo",
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center text-white">
      <Image id="logo" src={cuscLogo} alt="Logo" className="w-40 h-20" />
    </div>
  );
};

export default SplashScreen;