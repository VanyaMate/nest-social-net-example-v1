import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersTokensModule } from '../users-tokens/users-tokens.module';
import { UsersModule } from '../users/users.module';
import { UsersSessionsModule } from '../users-sessions/users-sessions.module';
import { UsersActiveModule } from '../users-active/users-active.module';
import { CryptModule } from '../crypt/crypt.module';


@Module({
    controllers: [ AuthController ],
    providers  : [ AuthService ],
    imports    : [
        UsersModule,
        UsersActiveModule,
        UsersTokensModule,
        UsersSessionsModule,
        CryptModule,
    ],
    exports    : [
        AuthService,
    ],
})
export class AuthModule {
}