// Product Schema

export default Product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
      },
    
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level',
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Category',
        description: 'The category to which the product belongs.',
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        description: 'Image representing the product.',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product Description',
        description: 'Detailed description of the product.',
      },
    
      {
        name: 'tags',
        type: 'array',
        title: 'Tags',
        description: 'Keywords associated with the product.',
        of: [{ type: 'string' }],
      },
    ],
  };
  
// Order Schema
 
  const oder= {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
      },
      {
        name: 'user',
        type: 'reference',
        title: 'User',
      },
      {
        name: 'products',
        type: 'array',
        title: 'Products',
        description: 'List of products in the order.',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'product',
                type: 'reference',
                title: 'Product',
                description: 'The product ordered.',
                to: [{ type: 'product' }],
              },
              {
                name: 'quantity',
                type: 'number',
                title: 'Quantity',
              },
              {
                name: 'price',
                type: 'number',
                title: 'Price',
              },
            ],
          },
        ],
      },
      {
        name: 'totalAmount',
        type: 'number',
        title: 'Total Amount',
      },
    
   
 
    ],
  };
  ;

  // Customer Schema

 const customer = {
    name: 'customer',
    type: 'document',
    title: 'Customer',
    fields: [
      {
        name: 'customerId',
        type: 'string',
        title: 'Customer ID',
      },
      {
        name: 'firstName',
        type: 'string',
        title: 'First Name',
      },
      {
        name: 'lastName',
        type: 'string',
        title: 'Last Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email Address',
      
      },
      {
        name: 'phoneNumber',
        type: 'string',
        title: 'Phone Number',
      },
      {
        name: 'address',
        type: 'object',
        title: 'Address',
        fields: [
          { name: 'street', type: 'string', title: 'Street' },
          { name: 'city', type: 'string', title: 'City' },
          { name: 'state', type: 'string', title: 'State' },
          { name: 'postalCode', type: 'string', title: 'Postal Code' },
          { name: 'country', type: 'string', title: 'Country' },
        ],
      },
    ],
  };
  
  