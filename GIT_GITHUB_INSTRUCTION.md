# 📦 Пошаговая инструкция: Загрузка проекта на GitHub

## Часть 1: Создание репозитория на GitHub (в браузере)

### Шаг 1: Откройте GitHub
1. Перейдите на [github.com](https://github.com)
2. Войдите в свой аккаунт (или создайте новый, если его нет)

### Шаг 2: Создайте новый репозиторий
1. Нажмите на **зеленую кнопку "New"** (слева вверху)
   - Или нажмите на значок "+" в правом верхнем углу → **"New repository"**

2. Заполните форму:
   - **Repository name:** `regina-portfolio` (можно любое другое имя без пробелов)
   - **Description:** (опционально) `My personal portfolio website`
   - **Public** или **Private:** Выберите **Public** (чтобы Vercel мог деплоить бесплатно)
   - ⚠️ **ВАЖНО:** НЕ ставьте галочки на:
     - ❌ Add a README file
     - ❌ Add .gitignore
     - ❌ Choose a license
   - (Эти файлы уже есть в проекте)

3. Нажмите **"Create repository"**

### Шаг 3: Скопируйте URL репозитория
После создания GitHub покажет страницу с инструкциями. Вам нужна **HTTPS URL**, она выглядит так:
```
https://github.com/ваш-username/regina-portfolio.git
```

**Скопируйте эту ссылку!** Она понадобится на следующем шаге.

---

## Часть 2: Загрузка проекта (в терминале)

### ⚠️ ВАЖНО: Где выполнять команды?
Все команды ниже нужно выполнять в терминале, находясь в папке вашего проекта:
```bash
cd /workspaces/default/code
```

### Шаг 4: Инициализация Git

Выполните команду:
```bash
git init
```

**Что увидите:**
```
Initialized empty Git repository in /workspaces/default/code/.git/
```

✅ Это значит Git инициализирован.

---

### Шаг 5: Добавьте все файлы

Выполните команду:
```bash
git add .
```

**Что эта команда делает:** Добавляет все файлы проекта в staged area (готовые к коммиту).

**Проверка (опционально):**
```bash
git status
```

Вы увидите список файлов зеленым цветом — это файлы, готовые к коммиту.

---

### Шаг 6: Создайте первый коммит

Выполните команду:
```bash
git commit -m "Initial commit: Regina Portfolio"
```

**Что увидите:**
```
[main (root-commit) abc1234] Initial commit: Regina Portfolio
 XX files changed, XXXX insertions(+)
 create mode 100644 ...
```

✅ Коммит создан!

---

### Шаг 7: Подключите GitHub репозиторий

⚠️ **ЗАМЕНИТЕ** `https://github.com/ваш-username/regina-portfolio.git` на **вашу реальную ссылку** из Шага 3!

```bash
git remote add origin https://github.com/ваш-username/regina-portfolio.git
```

**Пример с реальным username:**
```bash
git remote add origin https://github.com/ivanova-regina/regina-portfolio.git
```

**Проверка:**
```bash
git remote -v
```

Вы увидите:
```
origin  https://github.com/ваш-username/regina-portfolio.git (fetch)
origin  https://github.com/ваш-username/regina-portfolio.git (push)
```

✅ Репозиторий подключен!

---

### Шаг 8: Переименуйте ветку в main

```bash
git branch -M main
```

**Что эта команда делает:** Переименовывает текущую ветку в `main` (стандарт GitHub).

---

### Шаг 9: Загрузите код на GitHub

```bash
git push -u origin main
```

**Что увидите:**
GitHub может попросить авторизацию. Есть 2 варианта:

#### Вариант A: Personal Access Token (рекомендуется)

Если GitHub попросит пароль:

1. **НЕ вводите обычный пароль!** Он не работает.
2. Создайте Personal Access Token:
   - Откройте: [github.com/settings/tokens](https://github.com/settings/tokens)
   - Нажмите **"Generate new token"** → **"Classic"**
   - Дайте имя: `Vercel Portfolio`
   - Поставьте галочку на **repo** (полный доступ к репозиториям)
   - Срок: **No expiration** (или 90 days)
   - Нажмите **"Generate token"**
   - **СКОПИРУЙТЕ ТОКЕН!** Он больше не покажется!

3. Вставьте токен вместо пароля в терминал

#### Вариант B: SSH ключ

Если хотите использовать SSH (более продвинутый способ), следуйте [этой инструкции](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).

**После успешной авторизации увидите:**
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
...
To https://github.com/ваш-username/regina-portfolio.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Готово!** Код загружен на GitHub!

---

### Шаг 10: Проверка

Откройте в браузере:
```
https://github.com/ваш-username/regina-portfolio
```

Вы должны увидеть все файлы проекта! 🎉

---

## Часть 3: Подключение к Vercel

### Шаг 11: Откройте Vercel

1. Перейдите на [vercel.com](https://vercel.com)
2. Нажмите **"Sign Up"** (если нет аккаунта) или **"Login"**
3. Выберите **"Continue with GitHub"**
4. Разрешите Vercel доступ к GitHub

### Шаг 12: Импортируйте проект

1. На главной странице Vercel нажмите **"Add New..."** → **"Project"**
2. Вы увидите список ваших репозиториев
3. Найдите `regina-portfolio`
4. Нажмите **"Import"**

### Шаг 13: Настройки проекта

Vercel автоматически определит настройки:
- **Framework Preset:** Vite ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install` ✅

**Ничего менять не нужно!** Просто нажмите **"Deploy"**.

### Шаг 14: Ждите деплоя

Vercel начнет:
1. ⬇️ Клонировать код с GitHub
2. 📦 Устанавливать зависимости (npm install)
3. 🔨 Собирать проект (npm run build)
4. 🚀 Разворачивать на сервере

**Время:** 1-3 минуты.

### Шаг 15: Готово! 🎉

После завершения Vercel покажет:
- ✅ Зеленую галочку
- 🌐 Ссылку на ваш сайт: `https://regina-portfolio-xxxxx.vercel.app`

**Нажмите на ссылку** — ваш сайт онлайн! 🚀

---

## Обновление сайта в будущем

Когда захотите внести изменения:

```bash
# 1. Внесите изменения в код
# 2. Добавьте изменения в Git
git add .

# 3. Создайте коммит
git commit -m "Update: описание изменений"

# 4. Загрузите на GitHub
git push
```

Vercel **автоматически** развернет обновления через 1-2 минуты! ✨

---

## Возможные проблемы и решения

### Проблема 1: "Permission denied"
**Решение:** Используйте Personal Access Token вместо пароля (см. Шаг 9).

### Проблема 2: "fatal: remote origin already exists"
**Решение:**
```bash
git remote remove origin
git remote add origin https://github.com/ваш-username/regina-portfolio.git
```

### Проблема 3: Build failed на Vercel
**Решение:** 
1. Проверьте что проект собирается локально: `npm run build`
2. Смотрите логи в Vercel Dashboard

### Проблема 4: "Updates were rejected"
**Решение:**
```bash
git pull origin main --rebase
git push
```

---

## Полезные команды

```bash
# Проверить статус
git status

# Посмотреть историю коммитов
git log --oneline

# Посмотреть подключенные репозитории
git remote -v

# Отменить последний коммит (если ошиблись)
git reset --soft HEAD~1

# Посмотреть изменения
git diff
```

---

## Что дальше?

После успешного деплоя:

1. 🎨 **Тестируйте сайт** на разных устройствах
2. 🌐 **Настройте кастомный домен** (опционально)
   - Vercel Dashboard → Settings → Domains
3. 📊 **Смотрите аналитику** в Vercel Dashboard
4. 🔗 **Поделитесь ссылкой!**

---

## Нужна помощь?

- 📧 Поддержка Vercel: support@vercel.com
- 📚 Документация: [vercel.com/docs](https://vercel.com/docs)
- 💬 GitHub Support: [support.github.com](https://support.github.com)

**Удачи! 🚀✨**
