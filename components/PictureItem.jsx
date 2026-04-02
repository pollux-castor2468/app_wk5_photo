import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { Alert } from "react-native";
import { useState } from "react";

export default function PictureItem({item}) {
    const [photo, setPhoto] = useState(item.photo);
    const [content, setContent] = useState(item.content);


    const pickImage = async () => {
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== 'granted') {
            Alert.alert('Sorry!', 'We need photo album permission to select photo!');
            return;
        }
    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true, aspect: [4, 3], quality: 0.4,
            base64: true,
        });
    
        if(!result.canceled) {
            const base64String = `data:image/jpeg;base64,${result.assets[0].base64}`;
            return base64String;
        }
        return null;
    };

    const handleSelectPhoto = async () => {
        const base64String = await pickImage();
        setPhoto(base64String);
        // console.log(base64String);
    };
    
    return (
            <View style={item.id%2 === 0 ? styles.pictureItemR : styles.pictureItem}>
                <View style={styles.triL}></View>
                <View style={styles.triR}></View>
                <TouchableOpacity style={styles.bottom} 
                        onPress={handleSelectPhoto} activeOpacity={0.8} >
                    <Text style={styles.bottomcontent}>select photo</Text>
                </TouchableOpacity>
                {photo && (
                    <Image source={{uri: photo}} style={styles.img} />
                )}

                {/* <Text style={styles.content}>{item.content}</Text> */}
                <TextInput style={styles.content} 
                        value={content} onChangeText={setContent}
                        placeholder="content..." placeholderTextColor='#999'
                        multiline />
            </View>
    );
}

const styles = StyleSheet.create({
    pictureItem: {
        backgroundColor: '#afa497',
        padding: 10,
        margin: 10,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'rgb(237, 190, 50)',
        width: '65%',
        height: 210,
        position: 'relative',
        left: 0,
        alignItems: 'center',
    },
    pictureItemR: {
        backgroundColor: '#afa497',
        padding: 10,
        margin: 10,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'rgb(237, 190, 50)',
        width: '65%',
        height: 210,
        position: 'relative',
        left: 100,
        alignItems: 'center',
    },
    content: {
        fontSize: 18,
        position: 'absolute',
        bottom: -5,
        fontWeight: '500',
    },
    triL: {
        position: 'absolute',
        top: -20,
        left: 0,
        width: 10,
        height: 20,
        backgroundColor: '#345033',
    },
    triR: {
        position: 'absolute',
        top: -20,
        right: 0,
        width: 10,
        height: 20,
        backgroundColor: '#345033',
    },
    bottom: {
        borderRadius: 10,
        backgroundColor: 'white',
        width: 100,
        alignItems: 'center',
    },
    bottomcontent: {
        fontWeight: '600',
    },
    img: {
        width: 160,
        height: 120,
        position: 'relative',
        top: 5,
    },
})