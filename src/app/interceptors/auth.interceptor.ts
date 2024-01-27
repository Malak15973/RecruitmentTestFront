import {
   HttpInterceptorFn
} from '@angular/common/http';



export const AuthInterceptor: HttpInterceptorFn = ( req, next ) => {

  const token = localStorage.getItem( 'token' )
  if ( token ) {
    req.headers.append( "Authorization", `Bearer ${token}` )
  }
  return next( req )

}
