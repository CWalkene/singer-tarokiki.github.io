'use client';

import { Fragment, useEffect, useState, type ReactNode } from 'react';

const HOME_REVEAL_EVENT = 'tarokiki:home-reveal';

/** 重复点击当前导航项时重新挂载内容，让显现动画重新播放。 */
export function HomeReveal({ children }: { children: ReactNode }) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const replay = () => setAnimationKey((current) => current + 1);

    window.addEventListener(HOME_REVEAL_EVENT, replay);
    return () => window.removeEventListener(HOME_REVEAL_EVENT, replay);
  }, []);

  return <Fragment key={animationKey}>{children}</Fragment>;
}

export { HOME_REVEAL_EVENT };
