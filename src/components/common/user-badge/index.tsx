import React from 'react';
import cn from 'classnames'

import style from './user-badge.module.scss';
import {Link} from "react-router";
import {userPageRoute} from "../../../route/router.tsx";

interface Props {
  className?: string;
}

export const UserBadge: React.FC<Props> = ({className}) => {

  return (
    <Link
      className={cn(style.userBadge, className)}
      to={userPageRoute(1)}
    >
      {0 ? <img
        className={style.avatar}
        src="/"
        alt=""
        width={40}
        height={40}
      /> : <div className={style.emptyAvatar} />}

      <span className={style.nickname}>Dmitry</span>
    </Link>
  )
}