import React from 'react';
import { withRouter } from 'react-router-dom';
import AppBase from '../../base_components/AppBase';
import { PaymentContainer, PaymentImage, PaymentText, PrimaryText } from '../../base_components/sharedComponents';
import colors from '../../../src/constants/colors';

const PaymentHome = withRouter(props => (
  <AppBase>
    <PaymentContainer>
      <PaymentImage src="../../../assets/images/check.png" alt="Payment successful" />
      <PrimaryText color={colors.black}>Payment Successful!</PrimaryText>
      <PaymentText onClick={() => props.history.push('/allCuisinesAndRestaurants')}>Go back to home</PaymentText>
    </PaymentContainer>
  </AppBase>
));

export default PaymentHome;
