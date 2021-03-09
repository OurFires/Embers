import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Home extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path d="M5 9.74359L12 4L19 9.74359V20H14.3333V15.0769H9.66667V20H5V9.74359Z" stroke="#303138" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></Icon>;
  }

}