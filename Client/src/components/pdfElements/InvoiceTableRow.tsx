import { Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { OrderType } from '../../pages/orderManagement/types';


const borderColor = '#3778C2'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#3778C2',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


const InvoiceTableRow = ({ invoice }: {invoice: OrderType}) => {
    console.log('invoice table row ', invoice);

    const rows = invoice?.orderProduct?.map((item) => (
        <View style={styles.row} key={item?.productId}>
            <Text style={styles.description}>{item?.name}</Text>
            <Text style={styles.qty}>{item?.selectedQuantity}</Text>
            <Text style={styles.rate}>{item?.price}</Text>
            <Text style={styles.amount}>{(item?.selectedQuantity * item?.price).toFixed(2)}</Text>
        </View>
    ));

    return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
