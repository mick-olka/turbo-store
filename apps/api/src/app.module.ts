import { join } from "node:path";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./modules/auth/auth.module";
import { CollectionsModule } from "./modules/collections/collections.module";
import { OrdersModule } from "./modules/orders/orders.module";
import { PhotosModule } from "./modules/photos/photos.module";
import { ProductsModule } from "./modules/products/products.module";
import { TextBlocksModule } from "./modules/text_blocks/textBlocks.module";
import { UsersModule } from "./modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    EventEmitterModule.forRoot(),
    MulterModule.register({
      dest: "./upload",
    }),
    ServeStaticModule.forRoot({
      // http://localhost:4000/upload/20230130T140642201Z443397.png
      rootPath: join(__dirname, "..", "upload"),
      serveRoot: "/api/upload/", //last slash is important
    }),

    ProductsModule,
    CollectionsModule,
    PhotosModule,
    AuthModule,
    UsersModule,
    TextBlocksModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
