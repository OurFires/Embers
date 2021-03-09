import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class Check extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M9.91007 17.4959L3.70711 11.2929C3.31658 10.9024 2.68342 10.9024 2.29289 11.2929C1.90237 11.6835 1.90237 12.3166 2.29289 12.7071L9.29289 19.7071C9.71682 20.1311 10.4159 20.0893 10.7863 19.6179L21.7863 5.61786C22.1275 5.18359 22.0521 4.55494 21.6178 4.21372C21.1835 3.87251 20.5549 3.94795 20.2137 4.38222L9.91007 17.4959Z" /></Icon>;
  }

}