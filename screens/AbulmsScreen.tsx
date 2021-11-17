import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Text, Icon, Image } from 'react-native-elements'

const imgUrl = require('../assets/images/backTwo.jpg')
const imgTwo = require('../assets/images/backThree.jpg')
const imgThree = require('../assets/images/backOne.jpeg')

import { View } from '../components/Themed';

export default function AbulmsScreen() {

    const [cardName, setcardName] = useState<string>("Some Album")
    const [albums, setAlbums] = useState([
        {
            title: 'album 1',
            image: imgUrl
        },
        {
            title: 'album 1',
            image: imgTwo
        },
        {
            title: 'album 1',
            image: imgUrl
        },
        {
            title: 'album 1',
            image: imgThree
        },
        {
            title: 'album 1',
            image: imgTwo
        },
        {
            title: 'album 1',
            image: imgUrl
        },
    ])

    return (
        <ScrollView style={styles.container}>
            {albums.map((album, index) => {
                return (
                    <Card key={index}>
                        <Card.Title>{album.title}</Card.Title>
                        <Card.Divider />
                        <Card.Image source={album.image} />
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 10, backgroundColor: 'red' }}
                            title='VIEW NOW' />
                    </Card>
                )
            })

            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});