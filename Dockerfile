FROM node:18
WORKDIR /
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]
