import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
// biome-ignore lint/style/useImportType: <AppService is used as a Class>
import { AppService } from "./app.service";

@ApiTags("Info")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInfo(): string {
    return this.appService.getInfo();
  }
}
