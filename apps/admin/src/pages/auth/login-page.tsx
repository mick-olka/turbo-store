import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { CredentialsForm } from '.'

import * as S from './styles'

import { useLogin } from 'src/hooks'
import { I_LoginCreds } from 'src/models'
import { ROUTES } from 'src/routing'
import { useAuthStore } from 'src/store'

export const Login = () => {
  const { login, tokens, isLoading, isError } = useLogin()
  const authenticate = useAuthStore((state) => state.authenticate)
  const { state } = useLocation()
  const navigate = useNavigate()
  // first logout if user wants to login or register again
  const logout = useAuthStore((state) => state.logout)
  useLayoutEffect(() => {
    logout()
  }, [])
  const onSubmit = (dat: I_LoginCreds) => {
    login(dat)
  }
  useEffect(() => {
    if (tokens) {
      authenticate(tokens)
      // redirect to page user tried to reach before login
      navigate(state?.path || ROUTES.home)
    }
  }, [tokens])
  return (
    <S.AuthPane>
      <S.Header>
        <h2>Techo-Hutsal</h2>
        <h2>Панель адміністратора: Вхід</h2>
      </S.Header>
      <S.FormWrapper>
        <p>Будь ласка, введіть дані для входу в панель адміністратора</p>
        <CredentialsForm isLoading={isLoading} onSubmit={onSubmit} />
      </S.FormWrapper>
    </S.AuthPane>
  )
}
