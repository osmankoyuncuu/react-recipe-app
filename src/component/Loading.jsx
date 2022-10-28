import React from "react";
import StyleLoading, { Span } from "../Styles/Loading.styled";

const Loading = () => {
  return (
    <StyleLoading>
      <div>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <Span></Span>
      </div>
    </StyleLoading>
  );
};

export default Loading;
