import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Edit extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M20.1 19.2C20.5971 19.2 21 19.6029 21 20.1C21 20.5971 20.5971 21 20.1 21H3.9C3.40294 21 3 20.5971 3 20.1C3 19.6029 3.40294 19.2 3.9 19.2H20.1ZM6.8636 13.1636L16.7636 3.2636C17.088 2.93917 17.5985 2.91421 17.9516 3.18873L18.0364 3.2636L20.7364 5.9636C21.0608 6.28804 21.0858 6.79855 20.8113 7.15161L20.7364 7.2364L10.8364 17.1364C10.6957 17.277 10.5133 17.3663 10.3183 17.3922L10.2 17.4H7.5C7.03845 17.4 6.65804 17.0526 6.60605 16.605L6.6 16.5V13.8C6.6 13.6011 6.66585 13.409 6.78547 13.2528L6.8636 13.1636L16.7636 3.2636L6.8636 13.1636ZM17.4 5.17277L8.4 14.1728V15.6H9.82721L18.8272 6.59997L17.4 5.17277Z" /></Icon>;
  }

}