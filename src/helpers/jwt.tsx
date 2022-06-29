
import { sign } from "react-native-pure-jwt";




 export const getJWT = (id:string) => {

    const payload = { id, exp:new Date().getTime() + 2600 * 1000 };
  
      return  sign( payload, 'pokeApp', {alg:'HS256'});
    
 }
