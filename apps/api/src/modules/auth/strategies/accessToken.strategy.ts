import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common/decorators";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { envNames } from "src/utils/constants";

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<string>(envNames.ACCESS_TOKEN_SECRET),
    });
  }

  validate(payload: any) {
    return payload;
  }
}
