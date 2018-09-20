/**
 * @class ReactTachiSelect
 */

import * as React from "react";

import styles from "./styles.css";

export type Props = { text: string };

export default class ReactTachiSelect extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}
