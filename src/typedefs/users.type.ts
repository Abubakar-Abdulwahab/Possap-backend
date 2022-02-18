import { TokenData } from './../interfaces/auth.interface';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class LoginResponse {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field()
  tokenData: TokenData;
}
