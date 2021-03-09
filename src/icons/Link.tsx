import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Link extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M5.17749 13.1371L7.45166 10.8629C7.76566 10.5489 8.27475 10.5489 8.58875 10.8629C8.88031 11.1545 8.90114 11.6143 8.65122 11.9299L8.58875 12L6.31457 14.2742C5.37258 15.2162 5.37258 16.7435 6.31457 17.6854C7.22292 18.5938 8.67549 18.6262 9.62272 17.7828L9.72583 17.6854L12 15.4113C12.314 15.0973 12.8231 15.0973 13.1371 15.4113C13.4287 15.7028 13.4495 16.1626 13.1996 16.4782L13.1371 16.5484L10.8629 18.8225C9.29293 20.3925 6.74748 20.3925 5.17749 18.8225C3.64882 17.2939 3.60859 14.8404 5.05681 13.263L5.17749 13.1371ZM13.1371 5.17749C14.7071 3.6075 17.2525 3.6075 18.8225 5.17749C20.3925 6.74748 20.3925 9.29293 18.8225 10.8629L16.5483 13.1371C16.2343 13.4511 15.7253 13.4511 15.4113 13.1371C15.0973 12.8231 15.0973 12.314 15.4113 12L17.6854 9.72583C18.6274 8.78384 18.6274 7.25657 17.6854 6.31457C16.7434 5.37258 15.2162 5.37258 14.2742 6.31457L12 8.58875C11.686 8.90274 11.1769 8.90274 10.8629 8.58875C10.5489 8.27475 10.5489 7.76566 10.8629 7.45166L13.1371 5.17749ZM13.1371 9.72583C13.4511 9.41183 13.9602 9.41183 14.2742 9.72583C14.5882 10.0398 14.5882 10.5489 14.2742 10.8629L10.8629 14.2742C10.5489 14.5882 10.0398 14.5882 9.72583 14.2742C9.41183 13.9602 9.41183 13.4511 9.72583 13.1371L13.1371 9.72583Z" /></Icon>;
  }

}