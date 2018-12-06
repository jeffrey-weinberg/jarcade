import { authinticateLogin, registerNewUser } from '../../commands/auth'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class AuthController {
  constructor(router) {
    router.post('/login', wrapAsyncFunc(this.login))
    router.get('/jwt/login', wrapAsyncFunc(this.loginByJwt))
    router.post('/recover', wrapAsyncFunc(this.recover))
    router.put('/logout', wrapAsyncFunc(this.logout))
    router.post('/register', wrapAsyncFunc(this.register))
    router.post('/register/passhash'), wrapAsyncFunc(this.registerPasshash)
  }

  async register(req, res) {
    const { username, firstName, middleName, lastName, suffix, email } = req.body
    const results = await registerNewUser(username, firstName, middleName, lastName, suffix, email)
    res.send(results)
  }

  async registerPasshash(req, res) {
    const { userHandle, password } = req.body
    const results = await registerNewUserPasshash(userHandle, password)
    res.send(results)
  }

  async login(req, res) {
    const { email, password } = req.body
    const results = await authinticateLogin(email, password)
    res.send(results)
  }

  async loginByJwt(req, res) {
    const token = req.user
    res.send({
      user: {
        firstName: token.firstName,
        lastName: token.lastName,
        middleName: token.middleName,
        suffix: token.suffix,
        userHandle: token.userHandle,
        username: token.username,
        email: token.email,
        joinedDate: token.joinedDate
      }
    })
  }

  async recover(req, res) {
    const { email } = req.body
    res.sendStatus(200)
  }

  async logout(req, res) {
    res.send({})
  }
}
