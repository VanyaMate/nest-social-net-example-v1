import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/models/user.model';
import { AuthModule } from '../auth/auth.module';


@Module({
    controllers: [ UserController ],
    providers  : [ UserService ],
    imports    : [
        MongooseModule.forFeature([ { name: User.name, schema: UserSchema } ]),
        AuthModule,
    ],
})
export class UserModule {
}