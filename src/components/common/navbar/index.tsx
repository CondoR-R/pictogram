import React from 'react';
import cn from 'classnames'

import style from './navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({className}: Props) => {
  return (
    <nav className={cn(style.wrapper, className)}>
      navbar
    </nav>
  )
}