// src/components/TvRemote.js

import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon

const TvRemote = () => {
    const navigation = useNavigation();

    const handleBack = () => {
        console.log('Back Pressed');
        // Placeholder for back button functionality
    };

    const handleHome = () => {
        console.log('Home Pressed');
        // Placeholder for home button functionality
    };

    const handleTV = () => {
        navigation.navigate('DiscoveryScreen');
    };

    const handleArrowPress = (direction) => {
        console.log(`Arrow Pressed: ${direction}`);
        // Placeholder for arrow navigation
    };

    const handlePlayPause = () => {
        console.log('Play/Pause Pressed');
        // Placeholder for play/pause functionality
    };

    const handleFastForward = () => {
        console.log('Fast Forward Pressed');
        // Placeholder for fast forward functionality
    };

    const handleRewind = () => {
        console.log('Rewind Pressed');
        // Placeholder for rewind functionality
    };

    const handleVolumeUp = () => {
        console.log('Volume Up Pressed');
        // Placeholder for volume up functionality
    };

    const handleVolumeDown = () => {
        console.log('Volume Down Pressed');
        // Placeholder for volume down functionality
    };

    const handleMute = () => {
        console.log('Mute Pressed');
        // Placeholder for mute functionality
    };

    // Continue with the rest of your handlers...

    return (
        <View style={styles.container}>
            <View style={styles.tvRow}>
                <TouchableOpacity style={styles.button} onPress={handleTV}>
                    <Icon name="television-classic" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Up')}>
                    <Icon name="arrow-up" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Left')}>
                    <Icon name="arrow-left" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
                    <Icon name="play-pause" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Right')}>
                    <Icon name="arrow-right" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={handleBack}>
                    <Icon name="arrow-u-left-bottom" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleArrowPress('Left')}>
                    <Icon name="arrow-down" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleHome}>
                    <Icon name="home" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.volumeRow}>
                <TouchableOpacity style={styles.button} onPress={handleVolumeDown}>
                    <Icon name="volume-minus" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleMute}>
                    <Icon name="volume-mute" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleVolumeUp}>
                    <Icon name="volume-plus" size={24} color="black" />
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
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    tvRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 250,
    },
    volumeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        width: 60,
        height: 60,
    },
    // ... Add any additional styles you may need
});

export default TvRemote;
