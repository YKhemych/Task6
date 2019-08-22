import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../../auth/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean | never> {
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers.authorization.split(' ')[1];
    try {
      const token = await jwt.verify(authToken, jwtConstants.secret);
      request.user = token;
      return (request.user.data.role === 'ADMIN') ? true : false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
