// src/components/TvRemote.js

import React from 'react';
import discoverTVs from '../utils/discoverTvs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TvRemote = () => {
    const handlePowerToggle = () => {
        console.log('Power Toggle');
        // Add functionality to toggle TV power
    };

    const handleSelect = () => {
        console.log('Select Button Pressed');
        // Add functionality for select button
    };

    const handleArrowPress = (direction) => {
        console.log(`Arrow Pressed: ${direction}`);
        // Add functionality for arrow navigation
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => discoverTVs()}>
                <Text>Find TVs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handlePowerToggle}>
                <Text>Power</Text>
            </TouchableOpacity>

            <View style={styles.arrowsContainer}>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Up')}>
                    <Text>Up</Text>
                </TouchableOpacity>
                <View style={styles.horizontalArrows}>
                    <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Left')}>
                        <Text>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSelect}>
                        <Text>Select</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Right')}>
                        <Text>Right</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Down')}>
                    <Text>Down</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 5,
        width: 80,
        height: 40,
    },
    arrowsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalArrows: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TvRemote;
