
import { PropsWithChildren, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


type Props = PropsWithChildren<{
    iconName?: string;
    color: string;
    measure: number;
    name?: string;
    text?: string;
    unit: string;
    width: number;
    height: number;
    fontSize: number;
}>;


export function MeasureComponent({ iconName, color, measure, text, unit, width, height, fontSize } : Props) {

    const [widthComponent, setWidthComponent] = useState(width);
    const [heightComponent, setHeightComponent] = useState(height);
    const [fontSizeComponent, setfontSizeComponent] = useState(fontSize);

    useEffect(() => {
        setfontSizeComponent(fontSize);
    }, [fontSize]);

    useEffect(() => {
        setWidthComponent(width);
    }, [width]);

    useEffect(() => {
        setHeightComponent(height);
    }, [height]);



    const dinamicStyles = {
        container: {
            width: widthComponent,
            height: heightComponent
        },

        text: {
            fontSize: fontSizeComponent,
            color: 'white',
            marginLeft: 15
        },

        image: {
            
        }
    }
    

    return (
        <View style={[styles.container, dinamicStyles.container]}>
            
            <View style={styles.containerMeasure}>
                
                <Text style={dinamicStyles.text}>{measure}</Text>

                <Icon name={iconName ?? ''} size={40} color={color} style={styles.image}>{text ?? ''}</Icon>
            </View>

            <Text style={styles.text}>{unit}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 25
    },

    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#1e2124",
        justifyContent: 'space-around',
        borderRadius: 25,
        borderStyle: 'solid'
    },

    containerMeasure: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 100,
        marginTop: 30
    },

    image: {
        marginLeft: 'auto', 
        marginRight: 10
    }
});
