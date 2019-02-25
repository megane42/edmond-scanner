# edmond-scanner

## develop

* `yarn`

## build

* `docker build -t megane42/edmond-scanner .`

## check on local

* `EDMOND_API_URL="https://example.com/" yarn run start`

or

* `docker run --rm -it -e EDMOND_API_URL="https://example.com/" megane42/edmond-scanner`
