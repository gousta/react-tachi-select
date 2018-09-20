/**
 * @class ReactTachiSelect
 */

import * as React from "react";

import {
  Wrapper,
  ResultCounter,
  Selected,
  SelectedRemove,
  Input,
  Result,
  ResultItem,
  ResultOverRender
} from "./helpers";

export interface DataItem {
  value: any;
  label: string;
  searchable: string;
}

export type Props = {
  data: Array<DataItem>;
  onChange: Function;
  placeholder: string | undefined;
  wrapperClass?: any;
  className?: any;
};

export default class ReactTachiSelect extends React.Component<Props> {
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
    const { wrapperClass, className, placeholder = "Search" } = this.props;

    let { data } = this.props;
    const { search, label } = this.state;

    if (search.length > 0) {
      data = data.filter((o) => o.searchable.includes(search.toLowerCase()));
    }

    const renderLimit = 250;
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
