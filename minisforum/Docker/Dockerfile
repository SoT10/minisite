FROM postgres:13.3

# Копирование init-скрипта
COPY server.sql /docker-entrypoint-initdb.d/

# Установка рабочей базы данных (опционально)
ENV POSTGRES_DB=minisite
