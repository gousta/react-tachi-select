# react-tachi-select

> A React Select that works really well with a huge amount of data

[![NPM](https://img.shields.io/npm/v/react-tachi-select.svg)](https://www.npmjs.com/package/react-tachi-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tachi-select
-- OR --
yarn add react-tachi-select
```

## Usage

```tsx
import * as React from "react";

import ReactTachiSelect from "react-tachi-select";

class Example extends React.Component {
  state = {
    selectedValue: ""
  };

  handleChange = (value) => {
    this.setState({ selectedValue: value });
  };

  render() {
    const data = [
      {
        value: 1,
        label: "Option 1",
        searchable: "option 1"
      },
      {
        value: 2,
        label: "Option 2",
        searchable: "option 2"
      },
      {
        value: 3,
        label: "Option 3",
        searchable: "option 3"
      }
    ];
    return <ReactTachiSelect data={data} onChange={this.handleChange} />;
  }
}
```

## License

MIT © [gousta](https://github.com/gousta)
