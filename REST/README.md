# REST API
Representational State Transfer


## Table of Contents

1. [About Rest](#About-Rest)


### About Rest

- Web architecture


### Rest Configuration

- Resource : URI
- Verb : Http method
- Representations


### Rest 특징

- Uniform Interface
    - Resoucre control on URI
    - Limited interface process architecture style
- Stateless
    - Do not save state information
    - Increase freedom of service
    - API server process only request
- Cacheable
    - Use standards http
    - Use caching function
- Self-Descriptiveness
    - easy express structure
- Client-server Structure
    - Rest server provides API
    - Decrease interdependence
- Layer Structure
    - Security
    - Load balancing


### How Design Rest

- URI express resource's information
- Express resource's processing to HTTP method(GET, POST, PUT, DELETE)


### URI Structure

- Use `/` when express hierarchical relationship
- Use `-` when increase URI's readability
- Do not use `_` in URI
- Do not use file extensions in URL
- Use lower case in URL


### Http Request State Code

- 200 : Client's request processing is successful
- 201 : Create resource successful(On POST resource creation)
- 400 : Client's request is inappropriate
- 401 : Resource access deny when client doesn't login
- 403 : Resource access deny when server doesn't want to request
- 404 : Not fount
- 405 : When client use impossible method in resource
- 301 : When client request resource's URI was changed
- 500 : Server error
