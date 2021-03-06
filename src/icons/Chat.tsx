import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Chat extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M9.08062 16.8L5.29976 19.8247C4.77595 20.2437 4 19.8708 4 19.2V6.4C4 5.07452 5.07452 4 6.4 4H17.6C18.9255 4 20 5.07452 20 6.4V14.4C20 15.7255 18.9255 16.8 17.6 16.8H9.08062ZM5.6 17.5357L8.30025 15.3755C8.4421 15.262 8.61835 15.2002 8.8 15.2002H17.6C18.0418 15.2002 18.4 14.842 18.4 14.4002V6.40022C18.4 5.95839 18.0418 5.60022 17.6 5.60022H6.4C5.95818 5.60022 5.6 5.95839 5.6 6.40022V17.5357Z" /></Icon>;
  }

}