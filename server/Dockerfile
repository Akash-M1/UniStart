FROM node:21-bullseye

RUN curl https://dl.google.com/dl/cloudsdk/release/google-cloud-sdk.tar.gz > /tmp/google-cloud-sdk.tar.gz
RUN mkdir -p /usr/local/gcloud
RUN tar -C /usr/local/gcloud -xvf /tmp/google-cloud-sdk.tar.gz
RUN /usr/local/gcloud/google-cloud-sdk/install.sh

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 8000

CMD ["npm", "start"]