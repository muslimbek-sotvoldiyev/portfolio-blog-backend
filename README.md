# Portfolio Blog Backend

Shaxsiy portfolio va blog platformasi uchun NestJS backend.

## Texnologiyalar

- NestJS
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- Swagger API Documentation

## O'rnatish

### 1. Dependency o'rnatish
```bash
npm install
```

### 2. Environment o'zgaruvchilari
```bash
cp .env.example .env
```

`.env` faylida quyidagi parametrlarni o'zgartiring:
- `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_NAME` - PostgreSQL ma'lumotlar bazasi
- `JWT_SECRET` - JWT parol (xavfsiz parol o'rnatish)
- `PORT` - Server porti (default 3000)

### 3. PostgreSQL ma'lumotlar bazasini yaratish
```sql
CREATE DATABASE portfolio_blog_db;
```

### 4. Serverni ishga tushirish

**Development mode:**
```bash
npm run start:dev
```

**Production mode:**
```bash
npm run build
npm run start:prod
```

## API Endpoints

### Authentication
- `POST /auth/register` - Ro'yxatdan o'tish
- `POST /auth/login` - Kirish

### Users
- `GET /users` - Barcha foydalanuvchilar
- `GET /users/:id` - Foydalanuvchi ma'lumotlari
- `PATCH /users/:id` - Foydalanuvchi tahrirlash
- `DELETE /users/:id` - Foydalanuvchi o'chirish

### Profile
- `GET /profile/:userId` - Profil ma'lumotlari
- `POST /profile` - Profil yaratish
- `PATCH /profile` - Profil tahrirlash

### Articles
- `GET /articles` - Barcha maqolalar
- `GET /articles/user/:userId` - Foydalanuvchining maqolalari
- `GET /articles/:id` - Maqola ma'lumotlari
- `POST /articles` - Maqola yaratish (JWT)
- `PATCH /articles/:id` - Maqola tahrirlash (JWT)
- `DELETE /articles/:id` - Maqola o'chirish (JWT)

### Comments
- `GET /comments/article/:articleId` - Maqolaning kommentlari
- `POST /comments` - Komment qoldirish (JWT)
- `PATCH /comments/:id` - Komment tahrirlash (JWT)
- `DELETE /comments/:id` - Komment o'chirish (JWT)
- `POST /comments/:id/like` - Kommentni like qilish

### Certificates
- `GET /certificates/user/:userId` - Foydalanuvchining sertifikatlari
- `GET /certificates/:id` - Sertifikat ma'lumotlari
- `POST /certificates` - Sertifikat qo'shish (JWT)
- `PATCH /certificates/:id` - Sertifikat tahrirlash (JWT)
- `DELETE /certificates/:id` - Sertifikat o'chirish (JWT)

### Achievements
- `GET /achievements/user/:userId` - Foydalanuvchining yutuqlari
- `GET /achievements/:id` - Yutuq ma'lumotlari
- `POST /achievements` - Yutuq qo'shish (JWT)
- `PATCH /achievements/:id` - Yutuq tahrirlash (JWT)
- `DELETE /achievements/:id` - Yutuq o'chirish (JWT)

### Projects
- `GET /projects` - Barcha loyihalar
- `GET /projects/user/:userId` - Foydalanuvchining loyihalari
- `GET /projects/:id` - Loyiha ma'lumotlari
- `POST /projects` - Loyiha yaratish (JWT)
- `PATCH /projects/:id` - Loyiha tahrirlash (JWT)
- `DELETE /projects/:id` - Loyiha o'chirish (JWT)

### Categories
- `GET /categories` - Barcha kategoriyalar
- `GET /categories/:id` - Kategoriya ma'lumotlari
- `POST /categories` - Kategoriya yaratish (JWT)
- `PATCH /categories/:id` - Kategoriya tahrirlash (JWT)
- `DELETE /categories/:id` - Kategoriya o'chirish (JWT)

### Tags
- `GET /tags` - Barcha teglar
- `GET /tags/:id` - Teg ma'lumotlari
- `POST /tags` - Teg yaratish
- `PATCH /tags/:id` - Teg tahrirlash
- `DELETE /tags/:id` - Teg o'chirish

### Media
- `GET /media/user/:userId` - Foydalanuvchining fayllari
- `GET /media/:id` - Fayl ma'lumotlari
- `POST /media/upload` - Fayl yuklash (JWT)
- `DELETE /media/:id` - Fayl o'chirish (JWT)

## Swagger Dokumentatsiyasi

API dokumentatsiyasiga kirish:
```
http://localhost:3000/api/docs
```

## License

UNLICENSED
