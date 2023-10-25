import React, { useEffect } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { StripeProvider, usePaymentSheet } from '@stripe/stripe-react-native';
import axios from 'axios';
import link from '../link';

function Subscription({id, premium}){
    console.log(id,"from subscription")
    const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet()
    const PublishableKey="pk_test_51NJz1GCYjm8PidiVirvOkVE9YwfGc1AExD60bxLssTBfvS1CY44QMqv1BxVJ7jKHxRoGlAU8viaRSJQaxifaw3VE00m6Sl8fqF"


const payementInit=async(paymentIntent,changePremium)=>{
    const initResponse = await initPaymentSheet({
        merchantDisplayName: 'valeria',
        paymentIntentClientSecret: paymentIntent,
      });
      
      if (initResponse.error) {
        console.log(initResponse.error);
        Alert.alert('Something went wrong');
        return;
      }
     
      else{
         const paymentResponse = await presentPaymentSheet();
         console.log(paymentResponse)
      if (paymentResponse.error) {
        console.log(paymentResponse.error)
        Alert.alert(
          `Error code: ${paymentResponse.error.code}`,
          paymentResponse.error.message
        );
        return;
      }else {
        axios.put(`${link}/api/payment/subscription`,{
            uid:id
          })
        .then(res=>premium())
        .catch(err=>console.log(err))
      }
      }
     

}


    const payementIntent=()=>{
        axios.post(`${link}/api/payment/intents`,{amount:200})
        .then(res=>payementInit(res.data.paymentIntent))
        .catch(err=>console.log(err))


    }

useEffect(()=>{

},[])
    
    return (
      <View>
       <StripeProvider publishableKey={PublishableKey}>

       <TouchableOpacity
  style={{
    backgroundColor: 'rgba(240, 237, 228, 0.5)', // Transparent background color
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  marginBottom:20
  }}
  onPress={payementIntent}
>
  <Text style={{ color: 'white' }}>Subscribe</Text>
</TouchableOpacity>
        </StripeProvider>
      </View>
    );
  }

export default Subscription;
