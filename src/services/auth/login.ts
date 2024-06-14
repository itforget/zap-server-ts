import axios from 'axios'
import { tokenService } from '../auth/tokenService'

export const authService = {
  async login({ email, password }: { email: string; password: string }) {
    try {
      const response = await axios.post(
        'https://silver-sniffle-gv79r6gxv7w29p4j-5000.app.github.dev/api/auth/login',
        { email, password },
      )
      const { token } = response.data
      tokenService.save(token)
    } catch (error) {
      throw new Error('Usuário ou senha inválidos!')
    }
  },
}
