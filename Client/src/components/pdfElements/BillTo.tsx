import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { OrderType } from '../../pages/orderManagement/types';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 36,
        justifyContent: 'flex-start',
        width: '50%'
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});

const BillTo = ({ invoice }:{ invoice:OrderType }) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{invoice?.buyerName}</Text>
        <Text>{invoice?.address}</Text>
        <Text>{invoice?.mobile}</Text>
        <Text>{invoice?.buyerEmail}</Text>
    </View>
);

export default BillTo;