import dgram from 'react-native-udp';
import { Buffer } from 'buffer';

const discoverDevices = () => {
    return new Promise((resolve, reject) => {
        const socket = dgram.createSocket('udp4');
        const devicesMap = new Map();

        const ssdpMessage = Buffer.from(
            'M-SEARCH * HTTP/1.1\r\n' +
            'HOST: 239.255.255.250:1900\r\n' +
            'MAN: "ssdp:discover"\r\n' +
            'ST: urn:schemas-upnp-org:device:MediaRenderer:1\r\n' + // Targeting only MediaRenderer devices
            'MX: 3\r\n' +
            '\r\n'
        );

        socket.on('message', async (msg) => {
            const parsedDevice = parseSSDPResponse(msg.toString());
            if (parsedDevice.location) {
                try {
                    const friendlyName = await fetchFriendlyName(parsedDevice.location);
                    parsedDevice.friendlyName = friendlyName;
                    devicesMap.set(parsedDevice.usn, parsedDevice);
                } catch (error) {
                    console.error('Error fetching friendly name:', error);
                }
            }
        });

        socket.on('error', (error) => {
            console.error('Socket error:', error);
            reject(error);
        });

        socket.bind(() => {
            socket.setBroadcast(true);
            socket.send(ssdpMessage, 0, ssdpMessage.length, 1900, '239.255.255.250');
        });

        setTimeout(() => {
            socket.close();
            const uniqueDevices = Array.from(devicesMap.values());
            resolve(uniqueDevices); // Resolve the promise with the list of devices
        }, 5000); // Adjust timeout as needed
    });
};

const parseSSDPResponse = (response) => {
    const lines = response.split('\r\n');
    let device = {
        location: '',
        server: '',
        st: '',
        usn: '',
        friendlyName: ''
    };

    lines.forEach(line => {
        if (line.startsWith('LOCATION:')) {
            // Splitting and joining back to ensure the complete URL is captured
            const parts = line.split(':');
            parts.shift(); // Remove the "LOCATION" part
            device.location = parts.join(':').trim();
        } else if (line.startsWith('SERVER:')) {
            device.server = line.substring(line.indexOf(':') + 1).trim();
        } else if (line.startsWith('ST:')) {
            device.st = line.substring(line.indexOf(':') + 1).trim();
        } else if (line.startsWith('USN:')) {
            device.usn = line.substring(line.indexOf(':') + 1).trim();
        }
    });

    return device;
};

const fetchFriendlyName = async (location) => {
    try {
        const response = await fetch(location);
        const xmlText = await response.text();
        return parseXMLForFriendlyName(xmlText);
    } catch (error) {
        throw error;
    }
};

const parseXMLForFriendlyName = (xmlText) => {
    const friendlyNameMatch = xmlText.match(/<friendlyName>(.*?)<\/friendlyName>/);
    if (friendlyNameMatch && friendlyNameMatch[1]) {
        return friendlyNameMatch[1];
    }
    return 'Unknown Device'; // Default if not found
};

export default discoverDevices;
