"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const reflector = app.get(core_1.Reflector);
    const configService = app.get(config_1.ConfigService);
    const PORT = +configService.get('PORT');
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(reflector));
    await app.listen(PORT);
}
void bootstrap();
//# sourceMappingURL=main.js.map