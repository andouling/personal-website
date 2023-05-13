import styled from 'styled-components';
import { motion, useAnimationControls } from 'framer-motion';
import React, { useEffect } from 'react';
import IconLanguage24 from '../../icons/icon_language_24';
import { useWindowWidth } from '../../utils/useWindowWidth';
//import { useRouter } from 'next/router';
import useScrollPosition from '../../utils/useScrollPosition';
import { mediaBreakPoint } from '../../style/common';
import PMedium from '../../typography/p-medium';
import { buttonVariants } from '../../style/variants';

var locale = "en"

const LangChangeToggle = ({
  setFinalToggle,
}: {
  setFinalToggle?: Function;
}) => {
  const jpAnimationControls = useAnimationControls();
  const enAnimationControls = useAnimationControls();
  //const router = useRouter();
  //const locale = router.locale;
  const setLanguageChange = () => {
    if (locale === "en") {
      locale = "jp"
    } else {
      locale = "en"
    }
    enAnimationControls.start(locale === "en" ? "on" : "off")
    jpAnimationControls.start(locale === "jp" ? "on" : "off")
    /*if (router.query === {}) {
      locale === 'jp'
        ? router.push(router.pathname, router.pathname, { locale: 'en' })
        : router.push(router.pathname, router.pathname, { locale: 'jp' });
    } else if (router.query !== {}) {
      // dynamic routing 고려한 조건
      locale === 'jp'
        ? router.push(router.asPath, router.asPath, { locale: 'en' })
        : router.push(router.asPath, router.asPath, { locale: 'jp' });
    }*/

    // ui-ux article 1 본문 중 2번째 언어 전환 토글 눌렀을 때 작동
    setFinalToggle && setFinalToggle(true);
  };

  // for only mobile animation
  const width: number = useWindowWidth();
  const stringMediaBreakPoint = mediaBreakPoint.first.replace('px', '');
  const numberMediaBreakPoint = Number(stringMediaBreakPoint);
  const activeMobileAnimation: boolean = width <= numberMediaBreakPoint;

  // Header에서 언어 전환 토글로 언어 전환했을 때 스크롤 유지
  const ScrollY = useScrollPosition();
  useEffect(() => {
    window.scrollTo(0, ScrollY);
  }, [locale]);

  return (
      <MotionButtonContainer
        onClick={setLanguageChange}
        variants={buttonVariants}
        whileHover="whileHover"
        whileTap={
          activeMobileAnimation ? { scale: 1.7, rotateY: 540 } : 'whileTap'
        }
      >
        <IconLanguage24 />  
        <motion.div
          variants={leftVariants}
          initial={false}
          animate={enAnimationControls}//{locale === 'jp' ? 'on' : 'off'}
          className="english-width"
        >
          <PMedium
            text="English"
            color={locale === 'en' ? 'gray0' : 'gray4'}
            weight={700}
          />
        </motion.div>
        <Divider />
        <motion.div
          variants={rightVariants}
          initial={false}
          animate={jpAnimationControls} //{locale === 'en' ? 'on' : 'off'}
          className="japanese-width"
        >
          <PMedium
            text="日本語"
            color={locale === 'jp' ? 'gray0' : 'gray4'}
            weight={700}
          />
        </motion.div>
      </MotionButtonContainer>
  );
};

export default LangChangeToggle;

const MotionButtonContainer = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0; // touch area
  margin-right: 24px;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: ${() => useWindowWidth() < 420 ? "16px" : "46px"};
  margin-top: 24px;
  outline-style: none;
  border-style: none;
  background: #FFF;

  div {
    margin-bottom: 2px;
    margin-left: 6px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      display: none;
    }
  }

  .japanese-width {
    width: 60px; // 58 + 2
  }

  .english-width {
    width: 60px;
  }
`;

const Divider = styled.div`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  background-color: #000000; ///${({ theme }) => theme.gray5};
`;

// Framer Motion
const leftVariants = {
  on: { x: 1 },
  off: { x: 73 }, // 60 + 6 + 1 + 6
};

const rightVariants = {
  on: { x: -73 }, // 60 + 6 + 1 + 6
  off: { x: 0 },
};
