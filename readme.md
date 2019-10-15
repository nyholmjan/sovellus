## Prerequisites
You will need to have a working installation of docker

## Testing locally that the application works
Create a docker image of the application:  
`docker build https://github.com/nyholmjan/sovellus.git -t sovellus`

Test that the image works:  
`docker run -p 8000:8000 sovellus` and go direct your browser to `http://localhost:8000`. It should print 'Hello world!'