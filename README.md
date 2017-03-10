# Acquire frontend

## Installation

### Requirements
* [Docker & Docker-compose](docker.com).

### Usage

* Clone the repository.
* Create a new configuration file `frontend/config.js` following the example one `config.sample.js`
* Build image: `docker-compose build` or `docker-compose build --no-cache`.
* Recreate container: `docker-compose up`. Add `-d` at the end if you want to run the container in detached mode.
* Point your web browser to `localhost:8080` (development) or the correspondent production domain.
* Enjoy!

### Deployment in a production environment

Currently we're following [this guide](https://docs.docker.com/compose/production) to do production deployments. Basicly:
* Update source code: `git pull origin master`.
* Rebuild image: `docker-compose build`.
* Recreate container: `docker-compose -f docker-compose.yml -f docker-compose.prod.yml up`. Add `-d` at the end if you want to run the container in detached mode.