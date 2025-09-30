import React from 'react';
import cn from 'classnames'

import style from './post-card.module.scss';
import {UserBadge} from "../user-badge";

interface Props {
  className?: string;
}

export const PostCard: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(style.card, className)}>
      <div className={style.header}>
        <UserBadge />
      </div>
      <div className={style.imageBox}>
        <img
          src=""
          alt=""
          width={614}
          height={614}
        />
      </div>
      <div className={style.actionBox}>
        <span>like</span>
        <span>comment</span>
      </div>
      <div className={style.likesBox}>
        <span>13 лайков</span>
      </div>
      <div className={style.commentBox}>comments</div>
      <div className={style.inputBox}>
        <input

          id=""
          name=""
          value={''}
          // onCange={()=>{}}
        />
        <button

          type="button"
          // onClick={}
        >
          отправить
        </button>
      </div>
    </div>
  )
}