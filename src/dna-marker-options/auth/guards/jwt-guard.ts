import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';

export class JwtAuthGuard extends AuthGuard('jwt') {
	handleRequest(err, user, info, context: ExecutionContext) {
		const message = `Вы не авторизованы. Предпримите следующие шаги: 1. Откройте в Postman [auth-operator-service] 2. Авторизуйтесь с помощью ручки (2), если у вас ещё не создана запись, создайтке её с помощью ручки (1) 3. Откройте вкладку [Authorization] в Postman. Нажмите [Auth/type] 5. Выберите Bearer Token 6. Вставьте этот JWT Токен`;
		if (err || !user) {
			throw new UnauthorizedException(message);
		}
		return user;
	}


}
