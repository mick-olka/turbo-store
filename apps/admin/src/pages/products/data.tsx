import ImageIcon from '@mui/icons-material/Image'
import { Box, Typography, TextField, Switch } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import * as S from './styles'

import { useTextBlockById } from 'src/hooks'
import { useUpdateProduct } from 'src/hooks/use-products'
import { PHOTOS_URL } from 'src/utils'

export const product_columns: GridColDef[] = [
  { field: 'name', headerName: 'Назва', flex: 1, valueGetter: (param) => param.value.ua },
  {
    field: 'thumbnail',
    headerName: 'Зображення',
    width: 130,
    renderCell: (params) => (
      <Box>
        {params.value ? (
          <Box sx={{ width: '3rem', height: '3rem' }}>
            <S.Thumbnail alt={'R'} src={`${PHOTOS_URL}${params.value}`} variant='square' />
          </Box>
        ) : (
          <ImageIcon />
        )}
      </Box>
    ),
  },
  { field: 'price', headerName: 'Ціна в $', width: 130, valueFormatter: (p) => `$ ${p.value}` },
  {
    field: 'price_uah',
    headerName: 'Ціна в грн',
    width: 130,
    renderCell: (row_props) => {
      const d = useTextBlockById('dollar')
      const c = d.text_block ? Number(d.text_block.text.ua) : 37
      return <Typography>{Number(row_props.row.price) * c} ₴</Typography>
    },
  },
  {
    field: 'index',
    headerName: 'Порядок',
    width: 100,
    renderCell: (row_props) => {
      const [index, setIndex] = useState<number>(row_props.value || 0)
      const [value] = useDebounce(index, 1000)
      const { update, isLoading } = useUpdateProduct(row_props.row._id)
      useEffect(() => {
        if (row_props.value !== value) {
          update({ id: row_props.row._id, form_data: { index: value } })
        }
      }, [value])
      return (
        <Box onClick={(e) => e.stopPropagation()}>
          <TextField
            id={row_props.row._id + 'input'}
            size='small'
            type='number'
            value={index}
            onChange={(e) => setIndex(Number(e.currentTarget.value))}
            disabled={isLoading}
          />
        </Box>
      )
    },
    // valueGetter: (params) => params.row.thumbnail,
  },
  {
    field: 'active',
    headerName: 'Активний',
    width: 100,
    renderCell: (row_props) => {
      const [active, setActive] = useState<boolean>(row_props.value || false)
      const { update, isLoading } = useUpdateProduct(row_props.row._id)
      useEffect(() => {
        if (row_props.value !== active) {
          update({ id: row_props.row._id, form_data: { active } })
        }
      }, [active])
      return (
        <Box onClick={(e) => e.stopPropagation()}>
          <Switch
            id={row_props.row._id + 'active'}
            checked={active}
            onChange={(e, v) => setActive(v)}
            disabled={isLoading}
            // inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>
      )
    },
    // valueGetter: (params) => params.row.thumbnail,
  },
]

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}
