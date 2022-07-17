FROM jarredsumner/bun:edge
WORKDIR /app
COPY package.json package.json
COPY bun.lockb bun.lockb
RUN bun install
COPY . .
RUN adduser -D myuser
USER myuser
CMD bun dev -p $PORT