
import localStorage from 'local-storage';

class Auth {
    static authenticateUser (token) {
        localStorage.set('token', token)
      }
    static getToken () {
        return localStorage.get('token')
    }
    static deauthenticateUser () {
        localStorage.remove('token');
      
      }
    
}
export default Auth