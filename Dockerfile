ARG WINDOWS_VERSION
FROM docker-registry.devs.facilities.rl.ac.uk/bisapps-node:12-servercore${WINDOWS_VERSION}-1.0.0-SNAPSHOT AS build

COPY src ./src
COPY webpack.config.js package.json package-lock.json ./

RUN npm ci; npm run build


FROM mcr.microsoft.com/windows/servercore/iis:windowsservercore-${WINDOWS_VERSION}

WORKDIR /inetpub/wwwroot

COPY --from=build build .
