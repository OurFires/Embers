import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Email extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M18.125 5C19.5747 5 20.75 6.17525 20.75 7.625V16.375C20.75 17.8247 19.5747 19 18.125 19H5.875C4.42525 19 3.25 17.8247 3.25 16.375V7.625C3.25 6.17525 4.42525 5 5.875 5H18.125ZM19 7.912L12.5762 13.5335C12.2738 13.7981 11.8347 13.8202 11.5095 13.5997L11.4238 13.5335L5 7.91288V16.375C5 16.8583 5.39175 17.25 5.875 17.25H18.125C18.6082 17.25 19 16.8583 19 16.375V7.912ZM17.67 6.75H6.32825L12 11.7123L17.67 6.75Z" /></Icon>;
  }

}