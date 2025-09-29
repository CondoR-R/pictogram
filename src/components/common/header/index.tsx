import React from 'react';
import cn from 'classnames'

import style from './header.module.scss';

interface Props {
  className?: string;
}

export const Header: React.FC = ({className}: Props) => {
  return (
    <header className={cn(style.wrapper, className)}>
      header
    </header>
  )
}