import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Search extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M11.2 4C15.1765 4 18.4 7.22355 18.4 11.2C18.4 12.8998 17.811 14.4621 16.8258 15.6937L19.7657 18.6343C20.0781 18.9467 20.0781 19.4533 19.7657 19.7657C19.4773 20.0541 19.0235 20.0763 18.7097 19.8322L18.6343 19.7657L15.6937 16.8258C14.4621 17.811 12.8998 18.4 11.2 18.4C7.22355 18.4 4 15.1765 4 11.2C4 7.22355 7.22355 4 11.2 4ZM11.2 5.6C8.10721 5.6 5.6 8.10721 5.6 11.2C5.6 14.2928 8.10721 16.8 11.2 16.8C14.2928 16.8 16.8 14.2928 16.8 11.2C16.8 8.10721 14.2928 5.6 11.2 5.6Z" /></Icon>;
  }

}