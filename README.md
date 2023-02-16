# HttpClientAngular

Benefits of HttpClient
    HttpClient includes Observable API's
    It can have the Http headers in options
    HttpClient includes the highly testability features 
    it includes typed requests
    includes response objects
    includes request and response interception
    includes error handling 

CRUD Operations using HttpClient
Create -usually a POST method call
Read - usually a GET method call
Update - usually a PUT method call
Delete - usually a DELETE method call
 <h6>Technically- we should NEVER delete anything.Only soft deletes which means setting a flag or so.

HttpClient is a class that is used to make HTTP requests. It is a part of the @angular/common/http package. It is used to send and receive data from the server. It is a replacement for the old Http class. It is a part of the Angular 4.3+ version.

The HttpClientModule needs to be imported into the module.Usually app module.
HttpClient also gives other features like interceptors, error handling, etc.

To work with json server
 - Mock data file is needed 
 - To run server  type in terminal `json-server --watch db.json`
 <h4>Result will be</h4>
 <img src ="./src/assets/images/json-server.jpeg">

# HttpClient GET Method
. Making API calls to retrieve data is GET method call
. To make a call all we need is a endpoint or a API URL
  . get('api-endpoint')
. We can also pass various parameters as options to the GET call
    . get('api-endpoint', {params: new HttpParams().set('id', '1')})
. We will use options to pass parameters like headers,params,responseType,withCredentials etc.
    . Get('url',options:{headers:{},params:{}})
. The response type will be an observable

HttpClient Methods options
.Headers: is of type HttpHeaders
.Params: is of type HttpParams

<h3>How to use HttpClient GET method in 6 easy steps</h3>
1. Import HttpClientModule in our App Module
<br>
2. Import HttpClient in our service or component wherever we are making the HTTP request
    .It's good practice to have all HTTP calls in services
    .Becomes reusable and easy to maintain code
    .Easy to share between various components
<br>
3. Inject HttpClient in the constructor method of the class
<br>
4. Implement the GET method call
<br>
5. Import the Services into the required calling component class
<br>
6. Call the method to make the HTTP request