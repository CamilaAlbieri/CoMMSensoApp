import { MeasureComponent } from '@/components/MeasureComponent'
import {View, Text, StyleSheet, ScrollView} from 'react-native'

  export default function App(){
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <MeasureComponent iconName='tint' measure='10%' color='white' name='Humidity'>
          </MeasureComponent>

          {/* icon temperature */}
          <MeasureComponent iconName='thermometer-half' measure='20ºC' color='white' name='Temperature'>
          </MeasureComponent>

          <MeasureComponent iconName='flask' measure='10%' color='white' name='Ph'>
          </MeasureComponent>

          <MeasureComponent measure='10%' color='white' name='Nitrogen' text='N'>
          </MeasureComponent>

          <MeasureComponent text='P' measure='10%' color='white' name='Phosphorus'>
          </MeasureComponent>

          <MeasureComponent text='K' measure='10%' color='white' name='Potassium'>
          </MeasureComponent>

          <MeasureComponent iconName='bolt' measure='10%' color='white' name='EC'>
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
      backgroundColor: "#9731eb",
      justifyContent: "center",
      paddingTop: 15,
      gap: 20,
      paddingBottom: 100
    }

  })
