import React from 'react';
import cn from 'classnames'

import style from './main-page.module.scss';

interface Props {
  className?: string;
}

export const MainPage: React.FC = ({className}: Props) => {
  return (
    <div className={cn(style.wrapper, className)}>
      main-page
    </div>
  )
}