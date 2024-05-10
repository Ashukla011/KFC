import React from 'react'
import styles from "../styles/Order.module.css";
export const Popup = (props) => {
    return props.trigger ? (
        <div className={styles.Popup}>
          <div className={styles.popup_inner}>{props.children}</div>
        </div>
      ) : (
        ""
      );
    };
