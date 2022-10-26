2. Questions
Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone
  https:// is the scheme that tells server which protocol to use when acceessing to your website, this case is the sequrity http protocol.
backend is the subdomain, indicates wich particular page of your web site the web browser should serve up.
mega-app is the Second-Level Domain is the typical name of your web site
com is the top level domain, specifies what type of entity your organization is registered

Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-
 Web Api is an Api wich can be accessed using HTTP protocol, an Api is an application programming interface that is a set of subroutine definitions, protocols and tools for building software and applications.
 RESTful APIs support information exchange because they follow secure, reliable, and efficient software communication standards.
 statusCodes:
  200: The request succeeded. The result meaning of "success" depends on the HTTP method
    GET: The resource has been fetched and transmitted in the message body.
    HEAD: The representation headers are included in the response without any message body.
    PUT or POST: The resource describing the result of the action is transmitted in the message body.
  400: Bad request, The server cannot or will not process the request due to something that is perceived to be a client error
  500: Internal Server Error, The server has encountered a situation it does not know how to handle.
When we talk about CRUD, what does it mean?
  We talk about CRUD when we need to apply the four basics operations, those are: Create, Read, Update and Delete and it is typically applied to entities or collections depending on which database type is used.  