/* eslint-disable react/prop-types */
import P from 'prop-types';
import * as Styled from './styles';
import React from 'react';

export const Heading = ({ children, light = false }) => {
  return <Styled.Title light={light}>{children}</Styled.Title>;
};

Heading.protoTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
