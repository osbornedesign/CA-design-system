import React, { Component } from 'react';
import '../Badge/Badge.css'

//set badge styles
const styles = [
  'badge-primary',
  'badge-secondary',
  'badge-success',
  'badge-warning',
  'badge-danger'
];

//badge props
export const Badge = ({
  children,
  type,
  onClick,
  badgeStyle,
  disabled
}) => {

  //sets default to first item in the styles array
  const checkBadgeStyle = styles.includes(badgeStyle) ? badgeStyle : styles[0];

    return (
      <div
        onClick={onClick}
        type={type}
        className={`badge ${checkBadgeStyle}`}
        disabled={disabled}>
        {children}
      </div>
    )
}
