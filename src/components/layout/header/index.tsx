import React from 'react';
import cn from 'classnames'

import style from './header.module.scss';
import {Link} from "react-router";
import {Navbar} from "../../common/navbar";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  console.log(typeof style.right);

  return (
    <header className={cn(style.wrapper, className)}>
      <h1 className={style.left}>
        <Link to={'/'}>Pictogram</Link>
      </h1>
      <Navbar className={style.right} />
    </header>
  )
}

