import styled from "styled-components";

const inputStyles = `
  font-size: 15px;
  line-height: 2.3;
  color: #2e353b;
  height: 35px;
  border: 0;
  border-bottom: 1px solid #f0f0f0;
  width: 100%;
  padding: 0;

  &::placeholder {
    color: #9a9a9a;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  ${inputStyles};
`;

export const Result = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
  z-index: 1;
  max-height: 160px;
`;

export const ResultCounter = styled.div`
  position: absolute;
  right: 0px;
  top: 9px;
  font-size: 12px;
  color: #999;
`;

export const ResultItem = styled.a`
  color: #777;
  margin: 10px 10px;
  display: block;
  line-height: 20px;

  &:hover {
    color: #3f51b5;
  }
`;

export const ResultOverRender = styled.div`
  margin: 10px 10px;
  color: #777;
  display: block;
  line-height: 20px;
`;

export const Selected = styled.div`
  ${inputStyles};
`;

export const SelectedRemove = styled.a`
  float: right;
  font-size: 24px;
  line-height: 1.4;
  color: #999999;
`;
