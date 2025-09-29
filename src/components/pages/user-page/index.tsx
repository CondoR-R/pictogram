import React from 'react';
import cn from 'classnames'

import style from './user-page.module.scss';

interface Props {
  className?: string;
}

export const UserPage: React.FC = ({className}: Props) => {
  return (
    <div className={cn(style.wrapper, className)}>
      user-page
    </div>
  )
}