# ✅ Чеклист перед деплоем на Vercel

## Перед первым деплоем

- [ ] Все изображения отображаются локально
- [ ] Навигация работает
- [ ] Модальные окна открываются/закрываются
- [ ] Нет ошибок в консоли браузера
- [ ] Проект собирается: `npm run build`

## Деплой на Vercel через GitHub

### 1️⃣ Подготовьте GitHub репозиторий

```bash
# Если git еще не инициализирован
git init

# Добавьте все файлы
git add .

# Создайте первый коммит
git commit -m "Initial commit: Regina Portfolio"

# Создайте репозиторий на github.com и подключите:
git remote add origin https://github.com/ваш-username/regina-portfolio.git
git branch -M main
git push -u origin main
```

### 2️⃣ Подключите Vercel

1. Откройте [vercel.com](https://vercel.com)
2. Нажмите **"Sign Up"** или **"Login"**
3. Выберите **"Continue with GitHub"**
4. Нажмите **"Add New Project"**
5. Найдите `regina-portfolio` и нажмите **"Import"**
6. Vercel автоматически определит настройки
7. Нажмите **"Deploy"** ✨

**Время деплоя:** ~2 минуты

### 3️⃣ Проверьте результат

- [ ] Сайт открывается по ссылке `*.vercel.app`
- [ ] Все изображения загружаются
- [ ] Модальные окна работают
- [ ] Навигация функционирует

---

## Обновление сайта

После любых изменений:

```bash
git add .
git commit -m "Update: описание изменений"
git push
```

Vercel автоматически развернет обновления через 1-2 минуты! 🚀

---

## Настройка домена (опционально)

1. В Vercel Dashboard → **Settings** → **Domains**
2. Добавьте ваш домен
3. Скопируйте DNS записи
4. Добавьте их у регистратора домена (REG.RU, Timeweb, etc)
5. Подождите 1-2 часа

---

## Проблемы?

### Сайт не открывается из России
- Используйте VPN для панели Vercel
- Сам сайт обычно работает без VPN
- Для гарантии — настройте Cloudflare

### Build failed
```bash
# Проверьте локально
npm run build

# Смотрите логи в Vercel Dashboard
```

### Изображения не грузятся
- Проверьте что все в `src/assets/screenshots/`
- Убедитесь что импорты правильные

---

## Быстрый старт (копи-паста)

```bash
# 1. Инициализация
git init
git add .
git commit -m "Initial commit: Regina Portfolio"

# 2. Загрузка на GitHub (замените YOUR-USERNAME и YOUR-REPO)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main

# 3. Идите на vercel.com и импортируйте репозиторий
# 4. Нажмите Deploy
# 5. Готово! 🎉
```

---

## После деплоя

- [ ] Протестируйте сайт на мобильных
- [ ] Проверьте из России (с VPN и без)
- [ ] Поделитесь ссылкой!
- [ ] Добавьте ссылку в Telegram, Email подпись, резюме

---

## Полезные команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Проверка сборки локально
npm run preview

# Git коммит и пуш
git add .
git commit -m "Update content"
git push
```

---

## Что дальше?

- 🎨 Добавьте больше проектов
- 📸 Обновите фотографии
- 🔗 Добавьте ссылки на соцсети
- 📊 Настройте аналитику (Google Analytics, Yandex Metrika)
- 🌐 Настройте кастомный домен

**Документация:** См. [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md) для подробностей
