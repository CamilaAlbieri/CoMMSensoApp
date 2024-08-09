import { MeasureComponent } from '@/components/MeasureComponent'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import * as Paho from 'paho-mqtt';
import { useState, useEffect, SetStateAction } from 'react';


export default function App(){

    const [messages, setMessages] = useState([]);

    const [values, setValues] = useState([0, 0, 0, 0, 0, 0, 0]);

    /**
     * 
     * Temperature: 1 [0]
     * Umidity: 2 [1]
     * Conductivity: 3 [2]
     * Ph: 4 [3]
     * Nitrogen: 5 [4]
     * Phosphorus: 6 [5]
     * Potassium: 7 [6]
     * 
     */

    useEffect(() => {
      const client = new Paho.Client('192.168.1.103', 8888,'clientId');
      client.connect({
        onSuccess() {
          client.subscribe('/commsenso/send-measure');
        },

        onFailure(err) {
          console.error("MQTT connection failed", err);
        }
      });
  
  
      client.onMessageArrived = (message) => {
        const payload = JSON.parse(message.payloadString);
        

        // console.log(payload);

        setValues((prevValues) : SetStateAction<any> => {
          if (!Array.isArray(prevValues)) {
            prevValues = [0, 0, 0, 0, 0, 0, 0]; // Ou o valor inicial esperado
          }
          
          
          const newValues = [...prevValues];
          newValues[payload.sensorId - 1] = parseFloat(payload.value.toFixed(1));

          return newValues;
        });
  
  
        // setMessages((prevMessages) : SetStateAction<any> => {
        //   const newMessages = [...prevMessages, payload];
        //   return newMessages.length > 10 ? newMessages.slice(1) : newMessages;
        // });
      };
  
  
      return () => {
        client.disconnect();
      };

    }, []);

    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>

          <MeasureComponent iconName='tint' fontSize={50} width={150} height={150} unit='%' measure={values[1]} color='white' name='Humidity'>
          </MeasureComponent>

          <MeasureComponent iconName='thermometer-half' fontSize={50} width={150} height={150} unit='ºC' measure={values[0]} color='white' name='Temperature'>
          </MeasureComponent>

          <MeasureComponent iconName='flask' fontSize={50} width={150} height={150} measure={values[3]} unit='pH' color='white' name='Ph'>
          </MeasureComponent>

          <MeasureComponent measure={values[4]} fontSize={30} width={150} height={150} color='white' unit='mg/kg' name='Nitrogen' text='N'>
          </MeasureComponent>

          <MeasureComponent text='P' fontSize={30} width={150} height={150} measure={values[5]} unit='mg/kg' color='white' name='Phosphorus'>
          </MeasureComponent>

          <MeasureComponent text='K' fontSize={30} width={150} height={150} measure={values[6]} unit='mg/kg' color='white' name='Potassium'>
          </MeasureComponent>

          <MeasureComponent iconName='bolt' fontSize={30} width={150} height={150} unit='uS' measure={values[2]} color='white' name='EC'>
          </MeasureComponent>

        </View>
      </ScrollView>
    );

  }


  const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },

    container:{
      display: "flex",
      flexDirection: "row",
      flex:1,
      flexWrap: "wrap",
      backgroundColor: "#424549",
      justifyContent: "center",
      paddingTop: 75,
      gap: 20,
      paddingBottom: 100
    }

  })
