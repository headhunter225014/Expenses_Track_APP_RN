import {View,Text, TextInput, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function Input({label, textInputConfig, style}) {
    let inputStyles = [styles.textInput];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiLine);
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}/>
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 10,
    },
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    textInput: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiLine: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});