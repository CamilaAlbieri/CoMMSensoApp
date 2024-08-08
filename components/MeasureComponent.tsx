import { PropsWithChildren } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type Props = PropsWithChildren<{
    iconName?: string;
    color: string;
    measure: string;
    name: string;
    text?: string
}>;


export function MeasureComponent({ iconName, color, measure, name, text } : Props) {
    return (
        <View style={styles.container2}>
            <Text style={styles.text}>{measure}</Text>

            <Icon name={iconName ?? ''} size={40} color={color} style={styles.icon}>{text ?? ''}</Icon>
            

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 25,
    },

    icon: {
        marginTop: 10,
    },

    container2: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        borderRadius: 25,
        borderStyle: 'solid'
    }
});
