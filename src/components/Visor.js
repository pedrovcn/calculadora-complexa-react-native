import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
    <View>
        <TextInput 
            placeholder='Resultado'
            editable={false}
            style={styles.visor}
            value={props.resultado}
        />
    </View>
);

const styles = StyleSheet.create({
    visor: {
        height: 80,
        fontSize: 25,
        borderWidth: 1
    }
});
