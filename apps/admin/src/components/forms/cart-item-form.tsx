import { Box } from '@mui/material'
import { useForm } from 'react-hook-form'

import * as S from 'src/components/styles'

import { I_CartItemPopulated } from 'src/models'

interface I_Props {
  onSubmit: (data: I_CartItemPopulated) => void
  onCancel: () => void
  isLoading: boolean
  initValues: I_CartItemPopulated
  // required?: boolean
}

// const def: I_CartItem = {
//   main_color: '',
//   pill_color: '',
//   count: 1,
//   product: '',
// }

export const CartItemForm = (props: Readonly<I_Props>) => {
  const { onSubmit, onCancel, isLoading, initValues } = props
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<I_CartItemPopulated>({
    defaultValues: initValues,
  })
  return (
    <Box sx={{ width: '30rem' }}>
      <form onSubmitCapture={handleSubmit(onSubmit)}>
        <S.TextFieldBox>
          <S.TextFieldStyled {...register('main_color', { required: false })} label='Equipment' />
        </S.TextFieldBox>

        <S.TextFieldBox>
          <S.TextFieldStyled {...register('pill_color', { required: false })} label='Variant' />
        </S.TextFieldBox>

        <S.TextFieldBox>
          <S.TextFieldStyled {...register('count', { required: true })} label='Count' />
        </S.TextFieldBox>

        <S.ButtonStyled variant='contained' type='submit' disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Save'}
        </S.ButtonStyled>
        <S.ButtonStyled onClick={onCancel} variant='contained' disabled={isLoading}>
          Cancel
        </S.ButtonStyled>
      </form>
    </Box>
  )
}
