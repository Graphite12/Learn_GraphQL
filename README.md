# Learn_GraphQL

그래프QL 배우기

## 니꼴라스가 알려주는 GraphQL

REST API의 경우 정보를 요청(GET)을 할 경우. 서버는 DB에 접근하여 모든 컬럼을 조회하고 가져오게된다. 이때 사용자는 요청한 영역의 정보보다 더 많은 정보를 받게된다.
이를 Over-fetching이라고 한다. 사용자가 만약 이메일이나, 사용자 이름을 조회한다고 가정한다면

```js
/users/1/ GET
```

결국 사용자는 굳이 알필요도 없고, 개발자도 뭐가 들었는지 잘모르는 정보까지 받게된다.

### Under-Fetching

니꼴라스가 말한 클론코딩한 인스타그램앱을 실행했다면,

```js
/feed/
/notifications/
/user/1/
```

앱을 시작하기 위해 이렇게 3회 요청/응답을 거친다. REST방식의 단점이기도 한데, 하나의 앱이 실행되는데 많은 리소스를 여러번 요청한다.

이러한 행위를 Under-fetching이라고 하는데

GraphQL은 필요한 정보만 조회할수 있기 때문에 이러한 Over-fetching, Under-fetching 문제가 없다.

## REST API의 또다른 문제

REST API는 각요청을 URL뒤에 리소스를 표현하는 방식으로 정보를 요청한다.

```js
user/1/
/feed/
/movies/1/
```

그렇기 때문에 엔드포인트를 작성시 명확하게 구분짓는 명사를 사용해야한다.

GraphQL에서는 오직 하나의 엔드포인트 /graphql로 사용자가 요청한 정보를 담아 사용자에게 응답을 준다.

## GraphQL은 Query어를 사용한다.

지금까지 알던 Query로는 DataBase에서만 쓰이는줄 알았었다.

하지만 GraphQL은 Query어를 통해서 클라이언트와 DB에 요청 응답을 수행할 수있다.

그러면 직접 Graphql 서버를 작성해보면서 이해해보자
