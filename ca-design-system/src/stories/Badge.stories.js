import React from 'react';
import { Badge } from '../components/Badge/Badge';

//Storybook title
export default {
  title: 'Badges'
};

const PrimaryBadge = () =>
  <Badge
    onClick={() => {console.log("Clicked.")}}
    badgeStyle="badge-primary"
    badgeSize="badge-md">
    Primary badge
  </Badge>;

const SecondaryBadge = () =>
  <Badge
    onClick={() => {console.log("Clicked.")}}
    badgeStyle="badge-secondary"
    badgeSize="badge-md">
    Secondary badge
  </Badge>;

const SuccessBadge = () =>
  <Badge
    onClick={() => {console.log("Clicked.")}}
    badgeStyle="badge-success"
    badgeSize="badge-md">
    Success badge
  </Badge>;

const WarningBadge = () =>
  <Badge
    onClick={() => {console.log("Clicked.")}}
    badgeStyle="badge-warning"
    badgeSize="badge-md">
    Warning badge
  </Badge>;

const DangerBadge = () =>
  <Badge
    onClick={() => {console.log("Clicked.")}}
    badgeStyle="badge-danger"
    badgeSize="badge-md">
    Danger badge
  </Badge>;


export {
  PrimaryBadge,
  SecondaryBadge,
  SuccessBadge,
  WarningBadge,
  DangerBadge,
};