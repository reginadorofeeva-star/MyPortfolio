# ⚡ Быстрый старт: Копируй и вставляй команды

## 🔴 ШАГ 1: Создайте репозиторий на GitHub

1. Откройте [github.com/new](https://github.com/new)
2. Repository name: `regina-portfolio`
3. Выберите **Public**
4. ❌ **НЕ** ставьте галочки на README, .gitignore, license
5. Нажмите **"Create repository"**
6. **СКОПИРУЙТЕ URL** (будет нужен в команде ниже!)

---

## 🔵 ШАГ 2: Выполните эти команды в терминале

⚠️ **ВАЖНО:** Перед выполнением замените `ваш-username` на ваш реальный GitHub username!

```bash
# 1. Переход в папку проекта
cd /workspaces/default/code

# 2. Инициализация Git
git init

# 3. Добавление всех файлов
git add .

# 4. Первый коммит
git commit -m "Initial commit: Regina Portfolio"

# 5. Подключение GitHub (ЗАМЕНИТЕ ваш-username!)
git remote add origin https://github.com/ваш-username/regina-portfolio.git

# 6. Переименование ветки
git branch -M main

# 7. Загрузка на GitHub
git push -u origin main
```

**Если попросит пароль:**
- НЕ вводите обычный пароль!
- Создайте токен: [github.com/settings/tokens](https://github.com/settings/tokens/new)
- Выберите: Classic → repo → Generate token
- Скопируйте и вставьте токен вместо пароля

---

## 🟢 ШАГ 3: Подключите Vercel

1. Откройте [vercel.com](https://vercel.com)
2. Нажмите **"Continue with GitHub"**
3. Нажмите **"Add New..."** → **"Project"**
4. Найдите `regina-portfolio` → **"Import"**
5. Нажмите **"Deploy"**

✅ **Готово! Ждите 2 минуты — сайт будет онлайн!**

---

## 🔄 Обновление сайта

Когда внесете изменения:

```bash
git add .
git commit -m "Update: описание изменений"
git push
```

Vercel автоматически обновит сайт! ✨

---

## 💡 Полезное

**Проверить что Git работает:**
```bash
git status
```

**Посмотреть подключенный репозиторий:**
```bash
git remote -v
```

**Если что-то пошло не так:**
```bash
# Начать заново
rm -rf .git
git init
# И повторите команды из ШАГа 2
```

---

## 📞 Нужна подробная инструкция?

Смотрите файл: **GIT_GITHUB_INSTRUCTION.md**

**Удачи! 🚀**
