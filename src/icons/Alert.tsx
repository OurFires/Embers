import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Alert extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M11 18H13V20H11V18Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.42736 13 4.95455V16.0455C13 16.5726 12.5523 17 12 17C11.4477 17 11 16.5726 11 16.0455V4.95455C11 4.42736 11.4477 4 12 4Z" /></Icon>;
  }

}