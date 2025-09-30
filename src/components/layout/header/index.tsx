import React from 'react';
import cn from 'classnames'

import style from './header.module.scss';
import {Link} from "react-router";
import {UserBadge} from "../../common/user-badge";
import {mainPageRoute} from "../../../route/router.tsx";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  console.log(typeof style.right);

  return (
    <header className={cn(style.header, className)}>
      <h1 className={style.logo}>
        <Link
          title={'На главную'}
          className={style.logoLink}
          to={mainPageRoute}
        >Pictogram</Link>
      </h1>
      <div className={style.right}>
        <UserBadge />
      </div>
    </header>
  )
}

