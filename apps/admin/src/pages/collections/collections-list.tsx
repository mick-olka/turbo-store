export { CollectionPage } from './collection-page'
import { Box } from '@mui/material'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { columns } from './data'

import { ItemsPage } from 'src/components'
import { useCollections, useDeleteCollectionsMany } from 'src/hooks'
import { I_Collection } from 'src/models'
import { getRouteWithId } from 'src/routing'
import { ROUTES } from 'src/routing/routes'
import { filterArrByReg } from 'src/utils'

export const CollectionsListPage = () => {
  const { deleteMany } = useDeleteCollectionsMany()
  const [filter, setFilter] = useState<string | null>()
  const { collections, isLoading, isError } = useCollections()
  const navigate = useNavigate()
  const getFilteredProductsList = (): I_Collection[] =>
    useMemo(() => {
      if (collections) {
        if (filter) return filterArrByReg(collections, filter)
        return collections
      }
      return []
    }, [collections, filter])
  const onItemClick = (id: string) => {
    if (collections) {
      // const url_name = collections.find((c) => c._id === id)?.url_name
      navigate(getRouteWithId(ROUTES.collection, id))
    }
  }
  const handleSearchTrigger = (query?: string) => {
    setFilter(query || null)
  }
  const onCreateProdClick = () => {
    navigate(ROUTES.createCollection)
  }
  const data = {
    data: getFilteredProductsList(),
    count: collections?.length || 0,
    isLoading,
    isError,
    limit: 99,
  }
  return (
    <ItemsPage
      title='Collections'
      data={data}
      columns={columns}
      pagination={false}
      onDeleteMultiple={deleteMany}
      onItemClick={onItemClick}
      onCreateClick={onCreateProdClick}
      onSearchTrigger={handleSearchTrigger}
    />
  )
}
