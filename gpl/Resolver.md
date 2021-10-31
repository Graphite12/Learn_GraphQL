# REST API는 Controller, GraphQL은 Resolver

개발자가 REST API 서버를 설계할때 MVC패턴을 적용한다고 가정했을때

Router라는 폴더명이나 파일 명을 봤을 것이다.

Router라는 폴더나 파일내에서 모든 요청을 처리하는 소스코드를 작성해주는 이유가

사용자가 요청을 했을 경우 어떤 요청, 응답에서 에러가 발생했는지, 좀더 쉽게 파악하기 위해 Router파일안에 요청을 작성해주고, 핵심 비즈니스 로직은 Controller에 작성해주는데

Graphql은 NestJS를 배우게되면 조금 달라지지만 현재로선 Resolver가 그 역할을 담당하고있다.
