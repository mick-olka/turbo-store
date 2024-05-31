import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { MultiLangTextField } from '../inputs/multi-lang-text-field'
import * as S from '../photos/styles'

import { AlertDialog, Gallery } from 'src/components'
import * as CS from 'src/components/styles'
import { I_Locales, I_Photos } from 'src/models'

import { areEqualObjects, lanEnumToObject } from 'src/utils'

const def: I_FormData = {
  main_color: lanEnumToObject(''),
  pill_color: lanEnumToObject(''),
}
interface I_FormData {
  main_color: I_Locales
  pill_color: I_Locales
}
interface I_Props {
  data?: I_Photos
  editMode: boolean
  onCancel?: () => void
  onSubmit?: (form_data: I_FormData, files: File[]) => void
  onDeletePhoto?: (path: string) => void
}

export const PhotosForm = ({ data, editMode, onCancel, onSubmit, onDeletePhoto }: I_Props) => {
  const photos = data ? { main_color: data.main_color, pill_color: data.pill_color } : def
  const [isAlert, setIsAlert] = useState(false)
  // const [photos, setPhotos] = useState<I_Photos>(data || def)
  const [newFiles, setNewFiles] = useState<File[]>([])
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    // formState: { errors },
  } = useForm<I_FormData>({
    defaultValues: photos,
  })
  // const watchFields = watch()
  // useEffect(() => {
  //   // console.log(watchFields)
  // }, [watchFields])
  const onSave = (form_data: I_FormData) => {
    onSubmit && onSubmit(form_data, newFiles)
    setNewFiles([])
  }
  const handleCancelClick = () => {
    const unsaved_data = getValues()
    if (
      newFiles.length ||
      !areEqualObjects(photos.main_color, unsaved_data.main_color) ||
      !areEqualObjects(photos.pill_color, unsaved_data.pill_color)
    ) {
      setIsAlert(true) // show not saved changes alert
    } else cancelChanges()
  }
  const cancelChanges = () => {
    reset()
    onCancel && onCancel()
  }
  return (
    <Box sx={{ display: 'flex', overflow: 'auto', position: 'relative', width: '100%' }}>
      <Box sx={{ width: '17rem' }}>
        {editMode ? (
          <S.PhotosFormStyled onSubmitCapture={handleSubmit(onSave)}>
            <Box>
              <CS.TextFieldBox>
                <MultiLangTextField
                  label='Заголовок'
                  register={register}
                  names={['main_color.ua', 'main_color.en', 'main_color.de']}
                />
              </CS.TextFieldBox>
              <CS.TextFieldBox>
                <MultiLangTextField
                  label='Варіант'
                  register={register}
                  names={['pill_color.ua', 'pill_color.en', 'pill_color.de']}
                />
              </CS.TextFieldBox>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '10rem',
                justifyContent: 'space-around',
              }}
            >
              <CS.RoundButton variant='contained' type='submit' width='3rem'>
                <CheckRoundedIcon />
              </CS.RoundButton>
              <CS.RoundButton variant='contained' onClick={handleCancelClick} width='3rem'>
                <ClearRoundedIcon />
              </CS.RoundButton>
            </Box>
          </S.PhotosFormStyled>
        ) : (
          <Box>
            <Typography>Модель:</Typography>
            <Typography fontSize='20px'>{photos.main_color.ua}</Typography>
            <br />
            <Typography>Варіант: </Typography>
            <Typography fontSize='20px'>{photos.pill_color.ua}</Typography>
          </Box>
        )}
      </Box>
      <Gallery
        path_arr={data?.path_arr || []}
        editMode={editMode}
        newFiles={newFiles}
        setNewFiles={setNewFiles}
        onDeletePhoto={onDeletePhoto}
      />
      <AlertDialog
        open={isAlert}
        setOpen={setIsAlert}
        title='Скасувати зміни?'
        text='У вас незбережені зміни. Видалити їх?'
        agreeTitle='Скасувати зміни'
        cancelTitle='Зберегти зміни'
        onAgree={cancelChanges}
        onCancel={handleSubmit(onSave)}
      />
    </Box>
  )
}
