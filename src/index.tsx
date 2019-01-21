/**
 * @class ReactTachiSelect
 */

import * as React from "react";
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

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  ${inputStyles};
`;

const Result = styled.div`
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

const ResultCounter = styled.div`
  position: absolute;
  right: 0px;
  top: 9px;
  font-size: 12px;
  color: #999;
`;

const ResultItem = styled.a`
  color: #777;
  margin: 10px 10px;
  display: block;
  line-height: 20px;

  &:hover {
    color: #3f51b5;
  }
`;

const ResultOverRender = styled.div`
  margin: 10px 10px;
  color: #777;
  display: block;
  line-height: 20px;
`;

const Selected = styled.div`
  ${inputStyles};
`;

const SelectedRemove = styled.a`
  float: right;
  font-size: 24px;
  line-height: 1.4;
  color: #999999;
`;

export interface DataItem {
  value: any;
  label: string;
  searchable: string;
}

export interface Props {
  data: Array<DataItem>;
  onChange: Function;
  placeholder: string | undefined;
  renderLimit?: number;
  wrapperClass?: any;
  className?: any;
}

export interface State {
  label: string | null | undefined;
  search: string | null | undefined;
}

export default class ReactTachiSelect extends React.Component<Props, State> {
  public state = {
    label: null,
    search: ""
  };

  onChange = (item: DataItem | null) => {
    this.props.onChange(item ? item.value : null);
    this.setState({ label: item ? item.label : null, search: "" });
  };

  onType = (e: any) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const {
      wrapperClass,
      className,
      placeholder = "Search",
      renderLimit = 250
    } = this.props;

    let { data } = this.props;
    const { search, label } = this.state;

    if (search.length > 0) {
      data = data.filter((o) => o.searchable.includes(search.toLowerCase()));
    }

    const overRenderLimit = data.length > renderLimit;

    return (
      <Wrapper className={wrapperClass}>
        {!label ? <ResultCounter>({data.length})</ResultCounter> : null}
        {label ? (
          <Selected className={className}>
            {label}
            <SelectedRemove
              href="javascript:;"
              onClick={() => this.onChange(null)}
            >
              &times;
            </SelectedRemove>
          </Selected>
        ) : (
            <Input
              placeholder={placeholder}
              type="text"
              className={className}
              onChange={this.onType}
            />
          )}

        {search.length > 0 ? (
          <Result>
            {data.slice(0, renderLimit).map((item: DataItem, idx: number) => (
              <ResultItem
                href="javascript:;"
                key={"react-tachi-select-result-item-" + idx}
                onClick={() => this.onChange(item)}
              >
                {item.label}
              </ResultItem>
            ))}
            {overRenderLimit ? <ResultOverRender>...</ResultOverRender> : null}
          </Result>
        ) : null}
      </Wrapper>
    );
  }
}
