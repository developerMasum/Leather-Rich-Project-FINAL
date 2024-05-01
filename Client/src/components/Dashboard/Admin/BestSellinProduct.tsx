import { useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useGetAllProductsQuery } from '../../../redux/features/product/productApi';
import { TProduct } from '../../../types/product.type';

interface ProductInfo {
  _id: string;
  name: string;
  productType: string;
  category: string;
  price: number;
  productCode: string;
}

const BestSellingProductList: React.FC = () => {
//   const [params, setParams] = useState([]);
  const { data: productsData } = useGetAllProductsQuery([
    { name: "sort", value: "-sellsQuantity" },
  ]);
  const productInfo: TProduct[] | undefined = productsData?.data;
  console.log(productInfo);

  const columns: TableProps<ProductInfo>[ 'columns' ] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Product Type',
      dataIndex: 'productType',
      key: 'productType',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Product Code',
      dataIndex: 'productCode',
      key: 'productCode',
    },
  ];

  const data: [] | undefined = productInfo || [];

  return (
    <div className=' ps-10 mt-12 bg-white rounded-2xl px-3 py-2 mx-5'>
        <div> 
        <p className="text-slate-600 font-semibold text-base mb-8 uppercase">best Selling Products</p>
        </div>
      <Table columns={columns} dataSource={data} /> 
    </div>
  );
};

export default BestSellingProductList;
