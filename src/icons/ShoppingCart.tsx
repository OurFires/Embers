import * as React from 'react';
import Icon from "../components/Icon";
import { Props } from '../components/Icon/index.d';
export default class ShoppingCart extends React.Component<Props, any> {
  render() {
    return <Icon viewBox="0 0 24 24" {...this.props}><path fillRule="evenodd" clipRule="evenodd" d="M8.85002 18.3C9.5956 18.3 10.2 18.9044 10.2 19.65C10.2 20.3956 9.5956 21 8.85002 21C8.10444 21 7.50002 20.3956 7.50002 19.65C7.50002 18.9044 8.10444 18.3 8.85002 18.3ZM16.95 18.3C17.6956 18.3 18.3 18.9044 18.3 19.65C18.3 20.3956 17.6956 21 16.95 21C16.2044 21 15.6 20.3956 15.6 19.65C15.6 18.9044 16.2044 18.3 16.95 18.3ZM3.9 3H5.7C6.11004 3 6.46348 3.27616 6.56855 3.66397L6.58953 3.76315L7.02597 6.6H20.1C20.6398 6.6 21.0494 7.06861 20.9956 7.59031L20.9786 7.69524L19.4918 14.3857C19.2292 15.5674 18.2153 16.4229 17.0201 16.4951L16.8561 16.5H9.04425C7.76492 16.5 6.66927 15.6039 6.40439 14.3669L6.37565 14.2106L4.92787 4.8H3.9C3.40294 4.8 3 4.39706 3 3.9C3 3.43845 3.34744 3.05804 3.79504 3.00605L3.9 3H5.7H3.9ZM18.9781 8.4H7.30293L8.15475 13.9369C8.2171 14.3421 8.54379 14.6495 8.94306 14.6943L9.04428 14.7H16.8561C17.2428 14.7 17.5819 14.4538 17.7062 14.0956L17.7347 13.9952L18.9781 8.4Z" /></Icon>;
  }

}