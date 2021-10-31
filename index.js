import { GraphQLServer } from 'graphql-yoga';
import resolvers from './gpl/resolvers';
import movieResolvers from './movies/resolvers';
// graphql 서버를 시작하는 방법
/**
 * 처음에 세팅이 끝나면 터미널에서 No Schema defined라고 알려준다.
 *
 * 여기서 schema 는 개발자가 받거나 줄 정보에 대한 서술이라고 간단하개 해석해도 된다.(어떤 정보를 받고 제공하는지에 대한 기술)
 */
const server = new GraphQLServer({
  //모든 설정을 마친후 리졸버를 작성한다음 스키마를 정의해보자.
  typeDefs: 'movies/schema.graphql',
  //리졸버 작성하면 서버 설정에 불러와야한다.
  resolvers: movieResolvers,
});

server.start(() => console.log('Graphql Server Running'));

//이렇게 기초적인 작업이 끝났으면
// localhost:4000로 접속해보자
// 플레이 그라운드는 개발자가 쿼리 요청을 테스트하기 위한 장소이다.
