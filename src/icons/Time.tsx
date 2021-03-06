import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Time extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3ZM12 4.8C8.02355 4.8 4.8 8.02355 4.8 12C4.8 15.9764 8.02355 19.2 12 19.2C15.9764 19.2 19.2 15.9764 19.2 12C19.2 8.02355 15.9764 4.8 12 4.8ZM12 6.6C12.4616 6.6 12.842 6.94744 12.8939 7.39504L12.9 7.5V11.6272L14.4364 13.1636C14.7879 13.5151 14.7879 14.0849 14.4364 14.4364C14.112 14.7608 13.6015 14.7858 13.2484 14.5113L13.1636 14.4364L11.3636 12.6364C11.223 12.4957 11.1337 12.3133 11.1078 12.1183L11.1 12V7.5C11.1 7.00294 11.5029 6.6 12 6.6Z" /></Icon>;
  }

}