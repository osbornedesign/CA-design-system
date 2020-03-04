import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/Button/Button';

//Storybook title
export default {
  title: 'Buttons'
};


const PrimaryButton = () =>
  <Button
    onClick={() => {console.log("Clicked.")}}
    type="button"
    buttonStyle="btn-primary"
    buttonSize="btn-md">
    Primary button
  </Button>;

const SecondaryButton = () =>
  <Button
    onClick={() => {console.log("Clicked.")}}
    type="button"
    buttonStyle="btn-secondary"
    buttonSize="btn-md">
    Secondary button
  </Button>;

const SuccessButton = () =>
  <Button
    onClick={() => {console.log("Clicked.")}}
    type="button"
    buttonStyle="btn-success"
    buttonSize="btn-md">
    Success button
  </Button>;

const WarningButton = () =>
  <Button
    onClick={() => {console.log("Clicked.")}}
    type="button"
    buttonStyle="btn-warning"
    buttonSize="btn-md">
    Warning button
  </Button>;

const DangerButton = () =>
  <Button
    onClick={() => {console.log("Clicked.")}}
    type="button"
    buttonStyle="btn-danger"
    buttonSize="btn-md">
    Danger button
  </Button>;


export {
  PrimaryButton,
  SecondaryButton,
  SuccessButton,
  WarningButton,
  DangerButton,
};