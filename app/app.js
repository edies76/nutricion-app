import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleEqual = () => {
        try {
            setResult(eval(input).toString());
        } catch {
            setResult('Error');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora</Text>
            <TextInput
                style={styles.input}
                value={input}
                editable={false}
                placeholder="0"
            />
            <Text style={styles.result}>{result}</Text>
            <View style={styles.row}>
                {['7', '8', '9', '/'].map((item) => (
                    <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.row}>
                {['4', '5', '6', '*'].map((item) => (
                    <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.row}>
                {['1', '2', '3', '-'].map((item) => (
                    <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item)}>
                        <Text style={styles.buttonText}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleEqual}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 32, marginBottom: 20 },
    input: { width: 250, height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 24, textAlign: 'right', marginBottom: 10, paddingHorizontal: 10 },
    result: { fontSize: 28, color: 'green', marginBottom: 20, textAlign: 'right', width: 250 },
    row: { flexDirection: 'row', marginBottom: 10 },
    button: { backgroundColor: '#eee', padding: 20, margin: 5, borderRadius: 5 },
    buttonText: { fontSize: 24 },
});