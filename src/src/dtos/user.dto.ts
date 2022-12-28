/* eslint-disable prettier/prettier */
import { DtoBase } from './dtoBase';
import Module from 'module';

export class UserDto extends DtoBase {
    firstname?: string;
    lastname?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
}
