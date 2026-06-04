# 🚀 Развертывание сайта

Инструкция по размещению портфолио на публичном домене с доступом из России.

## Рекомендуемые платформы (доступны в РФ без VPN)

### 1. **Timeweb Cloud** ⭐ РЕКОМЕНДУЕТСЯ
- ✅ Российский хостинг
- ✅ Работает без VPN
- ✅ Простое развертывание
- ✅ Бесплатный SSL сертификат
- ✅ Поддержка Node.js и статики
- 💰 От 150₽/мес

**Шаги:**
1. Зарегистрируйтесь на [timeweb.cloud](https://timeweb.cloud)
2. Создайте виртуальный сервер или используйте хостинг
3. Подключите домен
4. Загрузите собранный проект (npm run build)
5. Настройте Nginx для раздачи статики

### 2. **Beget.com**
- ✅ Российский хостинг
- ✅ Доступен без VPN
- ✅ Простая панель управления
- 💰 От 120₽/мес

### 3. **REG.RU**
- ✅ Известный российский провайдер
- ✅ Хостинг + домены
- 💰 От 150₽/мес

### 4. **Selectel**
- ✅ Российское облако
- ✅ Высокая надежность
- 💰 От 200₽/мес

## Альтернативные варианты (могут требовать VPN)

### Vercel
- ✅ Бесплатно
- ⚠️ Может требовать VPN для доступа
- 🚀 Автоматический CI/CD из GitHub

### Netlify
- ✅ Бесплатно
- ⚠️ Может требовать VPN
- 🚀 Простое развертывание

### GitHub Pages
- ✅ Бесплатно
- ⚠️ Может требовать VPN
- ⚠️ Только статика

## Инструкция по развертыванию

### Шаг 1: Подготовка проекта

Убедитесь, что проект собирается без ошибок:

```bash
npm run build
```

Это создаст папку `dist/` с готовыми файлами.

### Шаг 2: Выбор домена

1. Купите домен на одном из сервисов:
   - REG.RU
   - Timeweb
   - Beget
   - 2domains.ru

2. Рекомендуемые зоны:
   - `.ru` - российская зона
   - `.рф` - российская кириллическая
   - `.com` - международная (может работать медленнее в РФ)

### Шаг 3: Развертывание на Timeweb (пример)

#### Вариант A: Через панель управления

1. Войдите в панель Timeweb
2. Создайте новый сайт
3. Загрузите содержимое папки `dist/` через FTP/SFTP
4. Привяжите домен к сайту
5. Включите SSL сертификат (бесплатно Let's Encrypt)

#### Вариант B: Через Git и CI/CD

1. Создайте репозиторий на GitHub/GitLab
2. Загрузите код проекта
3. Настройте SSH доступ к серверу
4. Создайте GitHub Action для автоматической сборки:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Timeweb

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        run: npm install -g pnpm
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Deploy via SFTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: your-server.timeweb.cloud
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
```

### Шаг 4: Настройка Nginx (для VPS)

Если используете VPS, создайте конфигурацию Nginx:

```nginx
server {
    listen 80;
    server_name your-domain.ru www.your-domain.ru;
    
    root /var/www/portfolio/dist;
    index index.html;
    
    # SPA роутинг
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Кэширование статических файлов
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Сжатие
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
}
```

После этого получите SSL:
```bash
sudo certbot --nginx -d your-domain.ru -d www.your-domain.ru
```

## Проверка доступности

После развертывания проверьте:

1. ✅ Сайт открывается по домену
2. ✅ SSL сертификат активен (https://)
3. ✅ Изображения загружаются
4. ✅ Модальные окна работают
5. ✅ Навигация по якорям функционирует
6. ✅ Сайт открывается без VPN из России

## Оптимизация для РФ

### Использование CDN

Для ускорения загрузки в России:
- Timeweb имеет свой CDN
- Selectel CDN
- VK Cloud CDN

### Оптимизация изображений

Все изображения уже оптимизированы, но можно дополнительно:
```bash
npm install -g sharp-cli
sharp -i src/assets/screenshots/*.png -o src/assets/screenshots/optimized/ -f webp
```

## Стоимость

**Минимальная конфигурация (Timeweb):**
- Домен `.ru`: ~300₽/год
- Хостинг: 150₽/мес = 1800₽/год
- SSL: бесплатно
- **ИТОГО: ~2100₽/год** (~175₽/мес)

## Поддержка

После развертывания для обновления сайта:
1. Внесите изменения в код
2. Соберите проект: `npm run build`
3. Загрузите новый `dist/` на сервер
4. Очистите кэш браузера: Ctrl+Shift+R

## Контакты для помощи

Если нужна помощь с развертыванием:
- Техподдержка Timeweb: 24/7 чат
- Документация: [timeweb.cloud/docs](https://timeweb.cloud/docs)
