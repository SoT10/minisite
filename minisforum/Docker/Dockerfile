FROM postgres:13.3

# Установка рабочего каталога
WORKDIR /docker-entrypoint-initdb.d/

# Копирование init-скрипта в рабочий каталог
COPY Server.sql /docker-entrypoint-initdb.d/

# Опционально установка рабочей базы данных
ENV POSTGRES_DB=minisite
