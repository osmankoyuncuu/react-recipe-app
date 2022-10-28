import styled, { keyframes } from "styled-components";

const StyleLoading = styled.div`
  margin: 10rem 0;
  min-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bg, theme }) => bg && theme.color.fourth}};
`;
const ripple = keyframes`
  from{
    opacity:1;
    transform:scale(0);
  }
  to{
    opacity:0;
    transform:scale(3);
  }
`;

export const Span = styled.span`
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 5px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
    z-index: -1;
    animation: ${ripple} 1.5s ease-out infinite;
  }
  &:first-child {
    background-color: #dcb4e2;
  }
  &:first-child::before {
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    background-color: #bd93c7;
    transform: scale(0.9);
  }
  &:nth-child(2)::before {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    background-color: #aa7db4;
    transform: scale(0.8);
  }
  &:nth-child(3)::before {
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    background-color: #92659d;
    transform: scale(0.7);
  }
  &:nth-child(4)::before {
    animation-delay: 0.8s;
  }
  &:last-child {
    background-color: #773e84;
    transform: scale(0.6);
  }
  &:last-child::before {
    animation-delay: 1s;
  }
`;

export default StyleLoading;
