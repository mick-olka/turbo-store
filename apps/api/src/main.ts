import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as bodyParser from "body-parser";
import { AppModule } from "./app.module";
import { performTransfer } from "./utils/transfer";
// import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: 'http://localhost:5173',
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  });
  app.setGlobalPrefix("/api");
  // app.useGlobalPipes(new ValidationPipe())
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle("Template")
    .setDescription("Template API description")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document);
  // const configService = app.get(ConfigService);
  await app.listen(7500, () => {
    console.log("DOCS: http://localhost:7500/api-docs");
    console.log("CLIENT: http://localhost:3000/");
    console.log("ADMIN: http://localhost:3005/");
    performTransfer();
  });
}
bootstrap();
