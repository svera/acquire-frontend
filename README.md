# Acquire frontend

## Installation

### Requirements
* [Docker & Docker-compose](docker.com).

### Usage

* Clone the repository.
* Create a new configuration file `frontend/config.js` following the example one `config.sample.js`
* Build image: `docker-compose build` or `docker-compose build --no-cache`.
* Recreate container: `docker-compose up`. Add `-d` at the end if you want to run the container in detached mode.
* Point your web browser to `localhost:8080`.
* Enjoy!
