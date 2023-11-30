/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/databasems/src/activity/activity.module.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/activity/activity.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const activity_service_1 = __webpack_require__(/*! ./services/activity.service */ "./apps/databasems/src/activity/services/activity.service.ts");
const activity_controller_1 = __webpack_require__(/*! ./controllers/activity.controller */ "./apps/databasems/src/activity/controllers/activity.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let ActivityModule = class ActivityModule {
};
exports.ActivityModule = ActivityModule;
exports.ActivityModule = ActivityModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        providers: [activity_service_1.ActivityService],
        controllers: [activity_controller_1.ActivityController]
    })
], ActivityModule);


/***/ }),

/***/ "./apps/databasems/src/activity/controllers/activity.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/databasems/src/activity/controllers/activity.controller.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const activity_service_1 = __webpack_require__(/*! ../services/activity.service */ "./apps/databasems/src/activity/services/activity.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let ActivityController = class ActivityController {
    constructor(activityService) {
        this.activityService = activityService;
    }
    getAll() {
        return this.activityService.findAll();
    }
    getOne(id) {
        return this.activityService.findOne(id);
    }
    create(body) {
        return this.activityService.create(body);
    }
    update(id, body) {
        return this.activityService.update(id, body);
    }
    delete(id) {
        return this.activityService.delete(id);
    }
};
exports.ActivityController = ActivityController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActivityController.prototype, "delete", null);
exports.ActivityController = ActivityController = __decorate([
    (0, common_1.Controller)('api_db/activity'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof activity_service_1.ActivityService !== "undefined" && activity_service_1.ActivityService) === "function" ? _a : Object])
], ActivityController);


/***/ }),

/***/ "./apps/databasems/src/activity/services/activity.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/databasems/src/activity/services/activity.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const activity_entity_1 = __webpack_require__(/*! ../../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
let ActivityService = class ActivityService {
    constructor(activity_repo) {
        this.activity_repo = activity_repo;
    }
    findAll() {
        return this.activity_repo.find();
    }
    findOne(id) {
        return this.activity_repo.findOne({ where: { id_acti: id } });
    }
    create(body) {
        const newAdministrator = this.activity_repo.create(body);
        return this.activity_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.activity_repo.findOne({ where: { id_acti: id } });
        this.activity_repo.merge(administrator, body);
        return this.activity_repo.save(administrator);
    }
    async delete(id) {
        await this.activity_repo.delete(id);
        return true;
    }
};
exports.ActivityService = ActivityService;
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_entity_1.Actividad)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ActivityService);


/***/ }),

/***/ "./apps/databasems/src/administrator/administrator.module.ts":
/*!*******************************************************************!*\
  !*** ./apps/databasems/src/administrator/administrator.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const administrator_service_1 = __webpack_require__(/*! ./services/administrator.service */ "./apps/databasems/src/administrator/services/administrator.service.ts");
const administrator_controller_1 = __webpack_require__(/*! ./controllers/administrator.controller */ "./apps/databasems/src/administrator/controllers/administrator.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let AdministratorModule = class AdministratorModule {
};
exports.AdministratorModule = AdministratorModule;
exports.AdministratorModule = AdministratorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        providers: [administrator_service_1.AdministratorService],
        exports: [administrator_service_1.AdministratorService],
        controllers: [administrator_controller_1.AdministratorController]
    })
], AdministratorModule);


/***/ }),

/***/ "./apps/databasems/src/administrator/controllers/administrator.controller.ts":
/*!***********************************************************************************!*\
  !*** ./apps/databasems/src/administrator/controllers/administrator.controller.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const administrator_service_1 = __webpack_require__(/*! ./../services/administrator.service */ "./apps/databasems/src/administrator/services/administrator.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let AdministratorController = class AdministratorController {
    constructor(administratorService) {
        this.administratorService = administratorService;
    }
    getAll() {
        return this.administratorService.findAll();
    }
    getOne(id) {
        return this.administratorService.findOne(id);
    }
    create(body) {
        return this.administratorService.create(body);
    }
    update(id, body) {
        return this.administratorService.update(id, body);
    }
    delete(id) {
        return this.administratorService.delete(id);
    }
};
exports.AdministratorController = AdministratorController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AdministratorController.prototype, "delete", null);
exports.AdministratorController = AdministratorController = __decorate([
    (0, common_1.Controller)('api_db/admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof administrator_service_1.AdministratorService !== "undefined" && administrator_service_1.AdministratorService) === "function" ? _a : Object])
], AdministratorController);


/***/ }),

/***/ "./apps/databasems/src/administrator/services/administrator.service.ts":
/*!*****************************************************************************!*\
  !*** ./apps/databasems/src/administrator/services/administrator.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdministratorService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const administrator_entity_1 = __webpack_require__(/*! ../../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
let AdministratorService = class AdministratorService {
    constructor(admin_repo) {
        this.admin_repo = admin_repo;
    }
    findAll() {
        return this.admin_repo.find();
    }
    findOne(id) {
        return this.admin_repo.findOne({ where: { id_admin: id } });
    }
    create(body) {
        const newAdministrator = this.admin_repo.create(body);
        return this.admin_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.admin_repo.findOne({ where: { id_admin: id } });
        this.admin_repo.merge(administrator, body);
        return this.admin_repo.save(administrator);
    }
    async delete(id) {
        await this.admin_repo.delete(id);
        return true;
    }
    findOneAdminByMail(body) {
        console.log('asdasd', body);
        return this.admin_repo.findOne({ where: { correo_admin: body } });
    }
};
exports.AdministratorService = AdministratorService;
exports.AdministratorService = AdministratorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrator_entity_1.Administrador)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AdministratorService);


/***/ }),

/***/ "./apps/databasems/src/app.module.ts":
/*!*******************************************!*\
  !*** ./apps/databasems/src/app.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_module_1 = __webpack_require__(/*! ./user/user.module */ "./apps/databasems/src/user/user.module.ts");
const register_module_1 = __webpack_require__(/*! ./register/register.module */ "./apps/databasems/src/register/register.module.ts");
const activity_module_1 = __webpack_require__(/*! ./activity/activity.module */ "./apps/databasems/src/activity/activity.module.ts");
const reward_module_1 = __webpack_require__(/*! ./reward/reward.module */ "./apps/databasems/src/reward/reward.module.ts");
const enterprise_module_1 = __webpack_require__(/*! ./enterprise/enterprise.module */ "./apps/databasems/src/enterprise/enterprise.module.ts");
const administrator_module_1 = __webpack_require__(/*! ./administrator/administrator.module */ "./apps/databasems/src/administrator/administrator.module.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ./entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ./entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ./entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ./entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ./entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ./entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DATABASE_HOST,
                port: Number(process.env.DATABASE_PORT.valueOf),
                username: process.env.DATABASE_USERNAME,
                password: process.env.DATABASE_PASS,
                database: process.env.DATABASE_NAME,
                entities: [activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario],
                synchronize: true,
                retryDelay: 3000,
                retryAttempts: 10
            }),
            user_module_1.UserModule, register_module_1.RegisterModule, activity_module_1.ActivityModule, reward_module_1.RewardModule, enterprise_module_1.EnterpriseModule, administrator_module_1.AdministratorModule, auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./apps/databasems/src/auth/auth.controller.ts":
/*!*****************************************************!*\
  !*** ./apps/databasems/src/auth/auth.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/databasems/src/auth/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(req) {
        const { secreto } = req.body;
        const isValidUser = await this.authService.validateUser(secreto);
        if (!isValidUser) {
            throw new common_1.HttpException('Credenciales inválidas', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = await this.authService.generateToken(secreto);
        return { access_token: token };
    }
    protectedResource() {
        return 'Este recurso está protegido por JWT';
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('protected'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "protectedResource", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/databasems/src/auth/auth.module.ts":
/*!*************************************************!*\
  !*** ./apps/databasems/src/auth/auth.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const jwt_strategy_1 = __webpack_require__(/*! ./jwt.strategy */ "./apps/databasems/src/auth/jwt.strategy.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/databasems/src/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/databasems/src/auth/auth.service.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_JWT,
                signOptions: { expiresIn: '24h' },
            }),
        ],
        providers: [jwt_strategy_1.JwtStrategy, auth_service_1.AuthService],
        exports: [jwt_1.JwtModule, passport_1.PassportModule],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);


/***/ }),

/***/ "./apps/databasems/src/auth/auth.service.ts":
/*!**************************************************!*\
  !*** ./apps/databasems/src/auth/auth.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async generateToken(username) {
        const payload = { username };
        const token = this.jwtService.sign(payload, { expiresIn: '24h' });
        return token;
    }
    async validateUser(secret) {
        const _secret = process.env.SECRET_NOSECURE;
        return secret === _secret;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);


/***/ }),

/***/ "./apps/databasems/src/auth/jwt-auth.guard.ts":
/*!****************************************************!*\
  !*** ./apps/databasems/src/auth/jwt-auth.guard.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./apps/databasems/src/auth/jwt.strategy.ts":
/*!**************************************************!*\
  !*** ./apps/databasems/src/auth/jwt.strategy.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secreto_secretisimo',
        });
    }
    async validate(payload) {
        return { userId: payload.id, username: payload.username };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtStrategy);


/***/ }),

/***/ "./apps/databasems/src/enterprise/controllers/enterprise.controller.ts":
/*!*****************************************************************************!*\
  !*** ./apps/databasems/src/enterprise/controllers/enterprise.controller.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnterpriseController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const enterprise_service_1 = __webpack_require__(/*! ../services/enterprise.service */ "./apps/databasems/src/enterprise/services/enterprise.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let EnterpriseController = class EnterpriseController {
    constructor(enterpriseService) {
        this.enterpriseService = enterpriseService;
    }
    getAll() {
        return this.enterpriseService.findAll();
    }
    getOne(id) {
        return this.enterpriseService.findOne(id);
    }
    create(body) {
        return this.enterpriseService.create(body);
    }
    update(id, body) {
        return this.enterpriseService.update(id, body);
    }
    delete(id) {
        return this.enterpriseService.delete(id);
    }
};
exports.EnterpriseController = EnterpriseController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnterpriseController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnterpriseController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EnterpriseController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], EnterpriseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EnterpriseController.prototype, "delete", null);
exports.EnterpriseController = EnterpriseController = __decorate([
    (0, common_1.Controller)('api_db/enterprise'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof enterprise_service_1.EnterpriseService !== "undefined" && enterprise_service_1.EnterpriseService) === "function" ? _a : Object])
], EnterpriseController);


/***/ }),

/***/ "./apps/databasems/src/enterprise/enterprise.module.ts":
/*!*************************************************************!*\
  !*** ./apps/databasems/src/enterprise/enterprise.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnterpriseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const enterprise_controller_1 = __webpack_require__(/*! ./controllers/enterprise.controller */ "./apps/databasems/src/enterprise/controllers/enterprise.controller.ts");
const enterprise_service_1 = __webpack_require__(/*! ./services/enterprise.service */ "./apps/databasems/src/enterprise/services/enterprise.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let EnterpriseModule = class EnterpriseModule {
};
exports.EnterpriseModule = EnterpriseModule;
exports.EnterpriseModule = EnterpriseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        controllers: [enterprise_controller_1.EnterpriseController],
        providers: [enterprise_service_1.EnterpriseService]
    })
], EnterpriseModule);


/***/ }),

/***/ "./apps/databasems/src/enterprise/services/enterprise.service.ts":
/*!***********************************************************************!*\
  !*** ./apps/databasems/src/enterprise/services/enterprise.service.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnterpriseService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const enterprise_entity_1 = __webpack_require__(/*! ../../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
let EnterpriseService = class EnterpriseService {
    constructor(enterprise_repo) {
        this.enterprise_repo = enterprise_repo;
    }
    findAll() {
        return this.enterprise_repo.find();
    }
    findOne(id) {
        return this.enterprise_repo.findOne({ where: { id_emp: id } });
    }
    create(body) {
        const newAdministrator = this.enterprise_repo.create(body);
        return this.enterprise_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.enterprise_repo.findOne({ where: { id_emp: id } });
        this.enterprise_repo.merge(administrator, body);
        return this.enterprise_repo.save(administrator);
    }
    async delete(id) {
        await this.enterprise_repo.delete(id);
        return true;
    }
};
exports.EnterpriseService = EnterpriseService;
exports.EnterpriseService = EnterpriseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(enterprise_entity_1.Empresa)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EnterpriseService);


/***/ }),

/***/ "./apps/databasems/src/entities/activity.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/entities/activity.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Actividad = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
let Actividad = class Actividad {
};
exports.Actividad = Actividad;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Actividad.prototype, "id_acti", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Actividad.prototype, "nombre_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Actividad.prototype, "descripcion_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Actividad.prototype, "tiempo_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Actividad.prototype, "cal_quemadas_acti", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { default: 0, nullable: false }),
    __metadata("design:type", Number)
], Actividad.prototype, "puntos_ot_acti", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => register_entity_1.Registro, (registro) => registro.id_acti),
    __metadata("design:type", Array)
], Actividad.prototype, "id_reg", void 0);
exports.Actividad = Actividad = __decorate([
    (0, typeorm_1.Entity)()
], Actividad);


/***/ }),

/***/ "./apps/databasems/src/entities/administrator.entity.ts":
/*!**************************************************************!*\
  !*** ./apps/databasems/src/entities/administrator.entity.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Administrador = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let Administrador = class Administrador {
    async hashPassword() {
        const saltRounds = 10;
        this.contrasena_admin = await bcrypt.hash(this.contrasena_admin, saltRounds);
    }
};
exports.Administrador = Administrador;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Administrador.prototype, "id_admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.Usuario, (usuario) => usuario.id_admin),
    __metadata("design:type", Array)
], Administrador.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => enterprise_entity_1.Empresa, (empresa) => empresa.id_admin, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Administrador.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Administrador.prototype, "nombre_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Administrador.prototype, "apellido_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Administrador.prototype, "correo_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, default: "pass", nullable: true }),
    __metadata("design:type", String)
], Administrador.prototype, "contrasena_admin", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Administrador.prototype, "hashPassword", null);
exports.Administrador = Administrador = __decorate([
    (0, typeorm_1.Entity)()
], Administrador);


/***/ }),

/***/ "./apps/databasems/src/entities/enterprise.entity.ts":
/*!***********************************************************!*\
  !*** ./apps/databasems/src/entities/enterprise.entity.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Empresa = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let Empresa = class Empresa {
};
exports.Empresa = Empresa;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Empresa.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Empresa.prototype, "nombre_emp", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Empresa.prototype, "direccion_emp", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], Empresa.prototype, "telefono_emp", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.Usuario, (usuario) => usuario.id_emp),
    __metadata("design:type", Array)
], Empresa.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => administrator_entity_1.Administrador, (administrador) => administrador.id_emp),
    __metadata("design:type", Array)
], Empresa.prototype, "id_admin", void 0);
exports.Empresa = Empresa = __decorate([
    (0, typeorm_1.Entity)()
], Empresa);


/***/ }),

/***/ "./apps/databasems/src/entities/register.entity.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/entities/register.entity.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registro = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let Registro = class Registro {
};
exports.Registro = Registro;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Registro.prototype, "id_reg", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => activity_entity_1.Actividad, (actividad) => actividad.id_reg, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_a = typeof activity_entity_1.Actividad !== "undefined" && activity_entity_1.Actividad) === "function" ? _a : Object)
], Registro.prototype, "id_acti", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.Usuario, (usuario) => usuario.id_reg, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_b = typeof user_entity_1.Usuario !== "undefined" && user_entity_1.Usuario) === "function" ? _b : Object)
], Registro.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Registro.prototype, "fecha_hora_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Registro.prototype, "tipo_act_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('time'),
    __metadata("design:type", String)
], Registro.prototype, "tiempo_reg", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 7, scale: 2 }),
    __metadata("design:type", Number)
], Registro.prototype, "distancia_reg", void 0);
exports.Registro = Registro = __decorate([
    (0, typeorm_1.Entity)()
], Registro);


/***/ }),

/***/ "./apps/databasems/src/entities/reward.entity.ts":
/*!*******************************************************!*\
  !*** ./apps/databasems/src/entities/reward.entity.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Premio = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Premio = class Premio {
};
exports.Premio = Premio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Premio.prototype, "id_pre", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Premio.prototype, "nombre_pre", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Premio.prototype, "descripcion_pre", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric'),
    __metadata("design:type", Number)
], Premio.prototype, "puntos_rq_pre", void 0);
exports.Premio = Premio = __decorate([
    (0, typeorm_1.Entity)()
], Premio);


/***/ }),

/***/ "./apps/databasems/src/entities/user.entity.ts":
/*!*****************************************************!*\
  !*** ./apps/databasems/src/entities/user.entity.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Usuario = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let Usuario = class Usuario {
    async hashPassword() {
        const saltRounds = 10;
        this.contrasena_user = await bcrypt.hash(this.contrasena_user, saltRounds);
    }
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => enterprise_entity_1.Empresa, (empresa) => empresa.id_user, {
        eager: true
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_a = typeof enterprise_entity_1.Empresa !== "undefined" && enterprise_entity_1.Empresa) === "function" ? _a : Object)
], Usuario.prototype, "id_emp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => administrator_entity_1.Administrador, (administrador) => administrador.id_user, {
        eager: true
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", typeof (_b = typeof administrator_entity_1.Administrador !== "undefined" && administrator_entity_1.Administrador) === "function" ? _b : Object)
], Usuario.prototype, "id_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 25 }),
    __metadata("design:type", String)
], Usuario.prototype, "apellido_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Usuario.prototype, "correo_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, default: "pass", nullable: false }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena_user", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Usuario.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Usuario.prototype, "fecha_nacimiento_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Usuario.prototype, "genero_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => register_entity_1.Registro, registro => registro.id_user),
    __metadata("design:type", Array)
], Usuario.prototype, "id_reg", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);


/***/ }),

/***/ "./apps/databasems/src/register/controllers/register.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/databasems/src/register/controllers/register.controller.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const register_service_1 = __webpack_require__(/*! ../services/register.service */ "./apps/databasems/src/register/services/register.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    getAll() {
        return this.registerService.findAll();
    }
    getOne(id) {
        return this.registerService.findOne(id);
    }
    create(body) {
        return this.registerService.create(body);
    }
    update(id, body) {
        return this.registerService.update(id, body);
    }
    delete(id) {
        return this.registerService.delete(id);
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "delete", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('api_db/register'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof register_service_1.RegisterService !== "undefined" && register_service_1.RegisterService) === "function" ? _a : Object])
], RegisterController);


/***/ }),

/***/ "./apps/databasems/src/register/register.module.ts":
/*!*********************************************************!*\
  !*** ./apps/databasems/src/register/register.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const register_service_1 = __webpack_require__(/*! ./services/register.service */ "./apps/databasems/src/register/services/register.service.ts");
const register_controller_1 = __webpack_require__(/*! ./controllers/register.controller */ "./apps/databasems/src/register/controllers/register.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let RegisterModule = class RegisterModule {
};
exports.RegisterModule = RegisterModule;
exports.RegisterModule = RegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        providers: [register_service_1.RegisterService],
        controllers: [register_controller_1.RegisterController]
    })
], RegisterModule);


/***/ }),

/***/ "./apps/databasems/src/register/services/register.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/databasems/src/register/services/register.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const register_entity_1 = __webpack_require__(/*! ../../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
let RegisterService = class RegisterService {
    constructor(register_repo) {
        this.register_repo = register_repo;
    }
    findAll() {
        return this.register_repo.find();
    }
    findOne(id) {
        return this.register_repo.findOne({ where: { id_reg: id } });
    }
    create(body) {
        const newAdministrator = this.register_repo.create(body);
        return this.register_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.register_repo.findOne({ where: { id_reg: id } });
        this.register_repo.merge(administrator, body);
        return this.register_repo.save(administrator);
    }
    async delete(id) {
        await this.register_repo.delete(id);
        return true;
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(register_entity_1.Registro)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RegisterService);


/***/ }),

/***/ "./apps/databasems/src/reward/controllers/reward.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/databasems/src/reward/controllers/reward.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RewardController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reward_service_1 = __webpack_require__(/*! ../services/reward.service */ "./apps/databasems/src/reward/services/reward.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let RewardController = class RewardController {
    constructor(rewardService) {
        this.rewardService = rewardService;
    }
    getAll() {
        return this.rewardService.findAll();
    }
    getOne(id) {
        return this.rewardService.findOne(id);
    }
    create(body) {
        return this.rewardService.create(body);
    }
    update(id, body) {
        return this.rewardService.update(id, body);
    }
    delete(id) {
        return this.rewardService.delete(id);
    }
};
exports.RewardController = RewardController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RewardController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RewardController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RewardController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], RewardController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RewardController.prototype, "delete", null);
exports.RewardController = RewardController = __decorate([
    (0, common_1.Controller)('api_db/reward'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof reward_service_1.RewardService !== "undefined" && reward_service_1.RewardService) === "function" ? _a : Object])
], RewardController);


/***/ }),

/***/ "./apps/databasems/src/reward/reward.module.ts":
/*!*****************************************************!*\
  !*** ./apps/databasems/src/reward/reward.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RewardModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const reward_controller_1 = __webpack_require__(/*! ./controllers/reward.controller */ "./apps/databasems/src/reward/controllers/reward.controller.ts");
const reward_service_1 = __webpack_require__(/*! ./services/reward.service */ "./apps/databasems/src/reward/services/reward.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let RewardModule = class RewardModule {
};
exports.RewardModule = RewardModule;
exports.RewardModule = RewardModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        controllers: [reward_controller_1.RewardController],
        providers: [reward_service_1.RewardService]
    })
], RewardModule);


/***/ }),

/***/ "./apps/databasems/src/reward/services/reward.service.ts":
/*!***************************************************************!*\
  !*** ./apps/databasems/src/reward/services/reward.service.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RewardService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const reward_entity_1 = __webpack_require__(/*! ../../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
let RewardService = class RewardService {
    constructor(reward_repo) {
        this.reward_repo = reward_repo;
    }
    findAll() {
        return this.reward_repo.find();
    }
    findOne(id) {
        return this.reward_repo.findOne({ where: { id_pre: id } });
    }
    create(body) {
        const newAdministrator = this.reward_repo.create(body);
        return this.reward_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.reward_repo.findOne({ where: { id_pre: id } });
        this.reward_repo.merge(administrator, body);
        return this.reward_repo.save(administrator);
    }
    async delete(id) {
        await this.reward_repo.delete(id);
        return true;
    }
};
exports.RewardService = RewardService;
exports.RewardService = RewardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reward_entity_1.Premio)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], RewardService);


/***/ }),

/***/ "./apps/databasems/src/user/controllers/user.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/databasems/src/user/controllers/user.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../services/user.service */ "./apps/databasems/src/user/services/user.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../auth/jwt-auth.guard */ "./apps/databasems/src/auth/jwt-auth.guard.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAll() {
        return this.userService.findAll();
    }
    getOne(id) {
        return this.userService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.userService.findOneUserByMail(searchItemDto.correo_user);
    }
    create(body) {
        return this.userService.create(body);
    }
    update(id, body) {
        return this.userService.update(id, body);
    }
    delete(id) {
        return this.userService.delete(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('api_db/user'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);


/***/ }),

/***/ "./apps/databasems/src/user/services/user.service.ts":
/*!***********************************************************!*\
  !*** ./apps/databasems/src/user/services/user.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
let UserService = class UserService {
    constructor(user_repo) {
        this.user_repo = user_repo;
    }
    findAll() {
        return this.user_repo.find();
    }
    findOne(id) {
        return this.user_repo.findOne({ where: { id_user: id } });
    }
    findOneUserByMail(correo) {
        return this.user_repo.findOne({ where: { correo_user: correo } });
    }
    create(body) {
        const newAdministrator = this.user_repo.create(body);
        return this.user_repo.save(newAdministrator);
    }
    async update(id, body) {
        const administrator = await this.user_repo.findOne({ where: { id_user: id } });
        this.user_repo.merge(administrator, body);
        return this.user_repo.save(administrator);
    }
    async delete(id) {
        await this.user_repo.delete(id);
        return true;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Usuario)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserService);


/***/ }),

/***/ "./apps/databasems/src/user/user.module.ts":
/*!*************************************************!*\
  !*** ./apps/databasems/src/user/user.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ./services/user.service */ "./apps/databasems/src/user/services/user.service.ts");
const user_controller_1 = __webpack_require__(/*! ./controllers/user.controller */ "./apps/databasems/src/user/controllers/user.controller.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const activity_entity_1 = __webpack_require__(/*! ../entities/activity.entity */ "./apps/databasems/src/entities/activity.entity.ts");
const administrator_entity_1 = __webpack_require__(/*! ../entities/administrator.entity */ "./apps/databasems/src/entities/administrator.entity.ts");
const enterprise_entity_1 = __webpack_require__(/*! ../entities/enterprise.entity */ "./apps/databasems/src/entities/enterprise.entity.ts");
const register_entity_1 = __webpack_require__(/*! ../entities/register.entity */ "./apps/databasems/src/entities/register.entity.ts");
const reward_entity_1 = __webpack_require__(/*! ../entities/reward.entity */ "./apps/databasems/src/entities/reward.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../entities/user.entity */ "./apps/databasems/src/entities/user.entity.ts");
const auth_module_1 = __webpack_require__(/*! ../auth/auth.module */ "./apps/databasems/src/auth/auth.module.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([activity_entity_1.Actividad, administrator_entity_1.Administrador, enterprise_entity_1.Empresa, register_entity_1.Registro, reward_entity_1.Premio, user_entity_1.Usuario, auth_module_1.AuthModule])
        ],
        providers: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService]
    })
], UserModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************************!*\
  !*** ./apps/databasems/src/main.ts ***!
  \*************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
(__webpack_require__(/*! dotenv */ "dotenv").config)();
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/databasems/src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: ['POST', 'PUT', 'DELETE', 'GET']
    });
    await app.listen(3001, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;