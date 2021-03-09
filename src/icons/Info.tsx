import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Info extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M12 9C12.5523 9 13 9.39399 13 9.88V19.12C13 19.606 12.5523 20 12 20C11.4477 20 11 19.606 11 19.12V9.88C11 9.39399 11.4477 9 12 9Z" /><path fillRule="evenodd" clipRule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6C13 6.55228 12.5523 7 12 7C11.4477 7 11 6.55228 11 6C11 5.44772 11.4477 5 12 5Z" /></Icon>;
  }

}