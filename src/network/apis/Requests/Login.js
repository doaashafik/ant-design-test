import { Instance } from '../index'
export const loginRequest = async (user) => Instance.get('/', {
    params: {
        username: user.username,
        password: user.password
    }
});
  