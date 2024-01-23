import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import discoverTVs from '../utils/discoverTvs'; // Ensure this path is correct

const DiscoveryScreen = () => {
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const discover = async () => {
            try {
                const discoveredDevices = await discoverTVs();
                setDevices(discoveredDevices);
            } catch (error) {
                console.error('Discovery error:', error);
            } finally {
                setLoading(false);
            }
        };

        discover();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => console.log('TV Selected:', item)}>
            <Text>{item.friendlyName}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={devices}
                renderItem={renderItem}
                keyExtractor={item => item.usn}
            />
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DiscoveryScreen;
