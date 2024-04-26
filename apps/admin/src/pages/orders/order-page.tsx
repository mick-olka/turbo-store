import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { cart_item_columns } from './data'

import { ItemsPage, CartItemForm, OrderForm, ContentDialog } from 'src/components'
import { useOrderById, useUpdateOrder } from 'src/hooks'
import { I_CartItemPopulated, I_OrderDto, StatusEnum } from 'src/models'
import { ChooseProducts } from 'src/pages'

// interface I_OrderItemWithId extends I_CartItemPopulated {
//   _id: string
// }

export const OrderPage = () => {
  const id = String(useParams().id)
  // const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [itemOpen, setItemOpen] = useState(false)
  const [cartItem, setCartItem] = useState<I_CartItemPopulated | null>(null)
  const [cart, setCart] = useState<I_CartItemPopulated[]>([])
  const [productsSelectionMode, setProductsSelectionMode] = useState(false)
  const { order, isLoading, isError } = useOrderById(id)
  const { update: update_order, isLoading: isUpdateFetching } = useUpdateOrder()
  useEffect(() => {
    if (order) {
      // const cart = order.cart.map((i) => ({ ...i, _id: i._id }))
      setCart(order.cart)
    }
  }, [order])
  const onItemsDelete = (ids: string[]) => {
    const new_cart = cart
      .filter((i) => !ids.includes(i._id))
      .map((i) => ({ ...i, product: i.product._id }))
    handleOrderUpdate({ cart: new_cart })
    // setCart(new_cart)
    // if (order) deleteItems({ id: order._id, data: { action: 'delete', items: ids } })
  }
  const onProdClick = (id: string) => {
    setItemOpen(true)
    const cartItem = cart.find((i) => i._id === id)
    if (cartItem) setCartItem(cartItem)
    // if (order) {
    //   const url_name = order.cart.find((p) => p.product._id === id)?.product.url_name
    //   if (url_name) navigate(getRouteWithId(ROUTES.product, url_name))
    // }
  }
  const handleOrderUpdate = (dat: Partial<I_OrderDto>, new_products?: string[]) => {
    if (order) {
      let sum = 0
      cart.forEach((i) => {
        // if (!i.product) {
        //   alert('Delete nonexisting products')
        //   return
        // }
        sum += i.product.price * i.count
      })
      const form_data: Partial<I_OrderDto> = {
        cart: cart.map((i) => ({ ...i, product: i.product._id })),
        ...dat,
        sum,
        status: StatusEnum.p,
      }
      if (new_products?.length)
        form_data.cart = [
          ...(form_data.cart || []),
          ...new_products.map((n) => ({ product: n, count: 1, main_color: '', pill_color: '' })),
        ]
      update_order({ id: order._id, form_data })
      setOpen(false)
    }
  }
  const handleCartItemUpdate = (item: I_CartItemPopulated) => {
    if (order) {
      const new_list = order.cart.map((i) => {
        const it = { ...i, product: i.product._id }
        if (i._id === item._id) {
          return { ...item, product: item.product._id }
        }
        return it
      })
      handleOrderUpdate({ cart: new_list })
      setItemOpen(false)
    }
  }
  const cart_items = {
    data: cart,
    isLoading,
    isError,
    count: cart.length,
    limit: 20,
  }

  if (productsSelectionMode) {
    return (
      <Box>
        <ChooseProducts
          onSubmit={(ids) => {
            handleOrderUpdate({}, ids)
            setProductsSelectionMode(false)
          }}
          onCancel={() => setProductsSelectionMode(false)}
        />
      </Box>
    )
  }

  if (order) {
    return (
      <Box>
        <h1>{`Order #${order._id.slice(20, 24)} - ${order.name}`}</h1>
        <Box sx={{ margin: '0 2rem' }}>
          <OrderForm initValues={order} isLoading={isLoading} onSubmit={handleOrderUpdate} />
        </Box>

        <Box sx={{ height: '100%' }}>
          <ItemsPage
            title={'Ordered products'}
            data={cart_items}
            columns={cart_item_columns}
            clientPagination
            onDeleteMultiple={onItemsDelete}
            onItemClick={onProdClick}
            deleteTitle='Remove these items from the order'
          >
            <>
              {/* <RoundButton onClick={() => setOpen(true)}>
                <EditOutlinedIcon />
              </RoundButton> */}
              <Button onClick={() => setProductsSelectionMode(true)}>Add Products</Button>
            </>
          </ItemsPage>
        </Box>
        {/* <ContentDialog open={open} setOpen={setOpen}>
          <OrderForm initValues={order} isLoading={isLoading} onSubmit={handleOrderUpdate} />
        </ContentDialog> */}
        <ContentDialog open={itemOpen} setOpen={setItemOpen}>
          {cartItem && (
            <CartItemForm
              initValues={cartItem}
              isLoading={isUpdateFetching}
              onCancel={() => setItemOpen(false)}
              onSubmit={handleCartItemUpdate}
            />
          )}
        </ContentDialog>
      </Box>
    )
  }
  if (isLoading) return <Box>Loading...</Box>
  return (
    <Box>
      <h3>Error</h3>
    </Box>
  )
}
