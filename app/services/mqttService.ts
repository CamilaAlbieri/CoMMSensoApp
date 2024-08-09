
import * as Paho from 'paho-mqtt';

export const client = new Paho.Client('192.168.1.103', 1883, 'clientId');

export function connect() {
    if (!client.isConnected()) {
        client.connect({
            onSuccess: () => {
                console.log("Connected to MQTT broker");
        
                // Agora você pode se inscrever em tópicos ou publicar mensagens
                client.subscribe('/commsenso/send-measure', {
                    onSuccess: () => {
                        console.log("Subscribed to /commsenso/send-measure");
                    },
                    onFailure: (err) => {
                        console.error("Failed to subscribe", err);
                    }
                });
            },
            onFailure: (err) => {
                console.error("MQTT connection failed", err);
            },
            useSSL: false,  // Defina como true se estiver usando SSL
        });
    }    
}