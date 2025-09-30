import React from 'react';
import cn from 'classnames'

import style from './main-page.module.scss';
import {PostCard} from "../../common/post-card";

interface Props {
  className?: string;
}

export const MainPage: React.FC = ({className}: Props) => {
  return (
    <div className={cn(style.wrapper, className)}>
      <PostCard />
    </div>
  )
}