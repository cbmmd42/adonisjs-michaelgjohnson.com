'use strict'

class UserController {

    async login ({ auth, request, response }) {
        const { email, password, remember_me } = request.all()
        await auth
            .remember((remember_me) ? true : false)
            .attempt(email, password)
    
        return response.route('/')
    }

    async logout ({ auth, response }) {
        await auth.logout()
    
        return response.route('/')
    }

    show ({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
          return "You cannot see someone else's profile"
        }
        return auth.user
    }

}

module.exports = UserController
