import { useMemo, useState } from 'react'

import { text_blocks_columns, textBlocksFilter } from './data'

import { ItemsPage, ContentDialog, TextBlockForm } from 'src/components'
import { useTextBlockById, useTextBlocks, useUpdateTextBlock } from 'src/hooks'
import { I_TextBlock, I_TextBlockForm } from 'src/models'

export const TextBlocksPage = () => {
  const [filter, setFilter] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [tbId, setTbId] = useState<string | null>(null)
  const { text_blocks, isLoading, isError } = useTextBlocks()
  const { text_block, isLoading: textBlockLoading } = useTextBlockById(tbId || undefined)
  const { update, isLoading: isFetchingUpdate } = useUpdateTextBlock()

  const getFilteredTextBlocksList = (): I_TextBlock[] =>
    useMemo(() => {
      return textBlocksFilter(text_blocks, filter)
    }, [text_blocks, filter])

  const onItemClick = (id: string) => {
    if (text_blocks) {
      setTbId(id)
      setOpen(true)
    }
  }
  const handleSearchTrigger = (query?: string) => {
    setFilter(query || null)
  }
  const handleSubmitUpdate = (form_data: I_TextBlockForm) => {
    if (tbId) update({ id: tbId, form_data })
    setOpen(false)
  }
  const data = {
    data: getFilteredTextBlocksList(),
    count: text_blocks?.length || 0,
    isLoading,
    isError,
    limit: 99,
  }
  return (
    <>
      <ItemsPage
        title='Text on Site'
        data={data}
        columns={text_blocks_columns}
        clientPagination
        onItemClick={onItemClick}
        onSearchTrigger={handleSearchTrigger}
      />
      <ContentDialog open={open && !textBlockLoading} setOpen={setOpen}>
        <TextBlockForm
          isLoading={isFetchingUpdate}
          onSubmit={handleSubmitUpdate}
          initValues={text_block}
        />
      </ContentDialog>
    </>
  )
}
