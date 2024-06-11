FROM node:20.11.1-alpine

RUN mkdir -p /app
WORKDIR /app
ADD . /app

RUN yarn install
#RUN yarn add sharp
RUN yarn run build

ENV HOST 0.0.0.0
EXPOSE 3000


CMD ["yarn", "start"]

# docker build --tag tmt-fe:1.0 .
# docker run -d --name tmt-fe -p 3000:3000 \
# -e API_BASE_URL = https://screeninghumanity.shop/api/v1 \
# -e NEXTAUTH_SECRET = hiavlFbM2pTtHhLfei0jTyfprgmyxpPB2sx8Dun+uWA= \
# -e KAKAO_CLIENT_ID=788b88b70813dc8dfe85f16733c8969b \
# -e KAKAO_CLIENT_SECRET=wFvyOczb7sxMxXgVCyRjQsIzVQ6eNEn0 \
# -e NAVER_CLIENT_ID=N0iBeILIj4HdFlRBCpCV \
# -e NAVER_CLIENT_SECRET=PV2xO80E4O \
# -e NEXT_PUBLIC_API_KEY = AIzaSyBiFkFmSlL8tSxxtH-yleB44vrjXGacKlU \
# -e NEXT_PUBLIC_AUTHDOMAIN =stockproject-7acf5.firebaseapp.com \
# -e NEXT_PUBLIC_PROJECTID= stockproject-7acf5 \
# -e NEXT_PUBLIC_STORAGE_BUCKET= stockproject-7acf5.appspot.com \
# -e NEXT_PUBLIC_MESSAGING_SENDER_ID= 1069637061931 \
# -e NEXT_PUBLIC_APP_ID= 1:1069637061931:web:c85fd4a9b603877c88896e \
# -e NEXT_PUBLIC_MEASUREMENT_ID = G-RN9TQVJ5LL \
# -e NEXT_PUBLIC_VAPID_KEY = BEITJzBYJqxbe_p8ds4s_ZyS64YVcMfSVff0xOfPNTalQrMchPCSvtqvbdYh7E5TkcX1XOH0xMu7ZNPLTfSxjTY \
# tmt-fe:1.0
