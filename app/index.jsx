import { Text, View, FlatList, StyleSheet } from "react-native";
import PictureItem from "../components/PictureItem";

const picture = [
    {
        id: 1,
        photo: null,
        content: 'photo1',
    },
    {
        id: 2,
        photo: null,
        content: 'photo2',
    },
    {
        id: 3,
        photo: null,
        content: 'photo3',
    },
];


export default function PictureListScreen() {

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Picture</Text> */}
            <FlatList
                data={picture}
                renderItem={({item}) => <PictureItem item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.picture}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        backgroundColor: '#cde2d0',
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
    },
    bottom: {
        borderRadius: 10,
        // position: 'absolute',
    },
    bottomcontent: {
        fontWeight: '600',
    },
    img: {
        width: '100%',
        height: 'auto',
    },
})