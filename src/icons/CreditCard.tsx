import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class CreditCard extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M18.125 5C19.5747 5 20.75 6.17525 20.75 7.625V16.375C20.75 17.8247 19.5747 19 18.125 19H5.875C4.42525 19 3.25 17.8247 3.25 16.375V7.625C3.25 6.17525 4.42525 5 5.875 5H18.125ZM5 12V16.375C5 16.8582 5.39175 17.25 5.875 17.25H18.125C18.6082 17.25 19 16.8582 19 16.375V12H5ZM5 8.5H19V7.625C19 7.14175 18.6082 6.75 18.125 6.75H5.875C5.39175 6.75 5 7.14175 5 7.625V8.5Z" /></Icon>;
  }

}